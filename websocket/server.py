import asyncio
import websockets


connections = [] 

async def server(new_connection):
  connections.append(new_connection)
  print('New connection')
  while True:
    try:
      message = await new_connection.recv()
    except websockets.exceptions.ConnectionClosedOK:
      connections.remove(new_connection)
      print('Connection removed')
      break
    
    for conn in connections:
      await conn.send(message)
  
    print('Message recieved and sent')

  



if __name__ == '__main__':
  start_server = websockets.serve(server, "localhost", 5000)
  loop = asyncio.get_event_loop()
  loop.run_until_complete(start_server)
  loop.run_forever()