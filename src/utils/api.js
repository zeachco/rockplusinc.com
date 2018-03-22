export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

const defaultSpace = 'rockplus.com';
export const baseUrl = `https://zeachco.com/`;

export const SETTINGS = {
    backend: baseUrl,
    space: defaultSpace,
    contentType: 'application/json'
};

export const custom = (url, method = METHODS.GET, data = {}) => {
    const headers = new Headers({
        'Content-Type': SETTINGS.contentType,
        'x-space': SETTINGS.space
    });
    const options = {
        method,
        headers
    };
    if (method !== METHODS.GET) options.body = JSON.stringify(data);
    const request = new Request(url, options);
    return fetch(request, {
        credentials: 'include'
    }).then(xhr => {
        if (xhr && xhr.ok) return xhr.json();
        throw xhr
    });
};

export const backend = (service, method = METHODS.GET, data = {}) => {
    const url = `${SETTINGS.backend}api/${service}`;
    return custom(url, method, data);
};

backend.get = url => backend(url, METHODS.get);
backend.post = (url, data) => backend(url, METHODS.POST, data);
backend.put = (url, data) => backend(url, METHODS.PUT, data);
backend.delete = (url, data) => backend(url, METHODS.DELETE, data);

export const media = url => baseUrl + url.replace(/^\//, '');

export default backend;
