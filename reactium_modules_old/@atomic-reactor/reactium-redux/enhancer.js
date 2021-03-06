import DevTools from './DevTools';

export default (enhancers = [], isServer = false) => {
    return [
        {
            name: 'devtools',
            order: 1001,
            enhancer:
                process.env.NODE_ENV === 'development'
                    ? DevTools.instrument()
                    : _ => _,
        },
        ...enhancers,
    ];
};
