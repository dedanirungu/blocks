const {
    loadModule
} = window['vue3-sfc-loader'];

const options = {

    moduleCache: {
        vue: Vue,
    },

    getFile(path) {

        return fetch(path).then(res => res.ok ? res.text() : Promise.reject(res));
    },

    addStyle(textContent) {

        const style = Object.assign(document.createElement('style'), {
            textContent
        });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}

const fetchTag = (tag_name) => {
    return Vue.defineAsyncComponent(() => loadModule('https://utupress.github.io/blocks/' + tag_name + '/index.vue', options))
}

const fetchPage = (tag_name) => {
    return Vue.defineAsyncComponent(() => loadModule('./' + tag_name, options))
}