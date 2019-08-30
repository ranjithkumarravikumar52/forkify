//maintaining all our DOM strings
export const elements = { //named export
    searchInput: document.querySelector('.search__field'),
    searchForm:  document.querySelector('.search'),
    searchResultList: document.querySelector('.results__list'),
    searchResults: document.querySelector('.results'),
    searchResultPages : document.querySelector('.results__pages')
};

/**
 * ajax loading spinner - to be reusable across different views
 * @param parent - expecting parent argument here so that we can attach spinner to child of the parent
 */
export const renderTheLoader = parent => {
    const loader = `
        <div class = "loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    //attach the above loader to the parent
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearTheLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader){//loader exists so we delete it
        loader.parentNode.removeChild(loader);
    }
};