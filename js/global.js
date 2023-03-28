const globalLoader = document.getElementsByClassName('global-loader')[0];

export const stopLoader = () => {
    globalLoader.classList.remove('loading');
    globalLoader
        .getElementsByClassName('loader')[0]
        .classList.remove('loading');
};

export const newListElement = (title, year, genres, imgUrl, id) => {
    const listElement = document.createElement('div');
    listElement.innerHTML = `
            <div class="poster">
                <p class="title">${title}</p>
                <p class="subtitle">${year && `${year},`} ${genres.join(', ')}</p>
                <img src="${imgUrl}" alt="" />
            </div>
        `;
    listElement.classList.add('list-element');
    listElement.getElementsByClassName('title')[0].addEventListener('click', () => {
        if (listElement.matches(':hover')) window.location.href = `./movie.html?id=${id}`;
    });
    return listElement;
};

export const redirectMain = () => {
    window.location.href = './index.html';
};
