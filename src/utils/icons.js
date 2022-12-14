import './../../node_modules/boxicons/css/boxicons.min.css';

const icons = {
    app: 'bx bxs-square-rounded',
    arrowRight: 'bx bx-chevron-right',
    arrowLeft: 'bx bx-chevron-left',
    arrowTop: 'bx bx-chevron-top',
    arrowDown: 'bx bx-chevron-down',

    check: 'bx bx-check',

    loader: 'bx bx-loader',
    loaderCircle: 'bx bx-loader-circle',
    loaderAlt: 'bx bx-loader-alt',

    menu: 'bx bx-menu',

    pieChartFill: 'bx bxs-pie-chart-alt-2',

    togglerLeft: 'bx bx-toggle-left',
    togglerRightFill: 'bx bxs-toggle-right',
    
    trash: 'bx bxs-trash',

    x: 'bx bx-x',
    xCircle: 'bx bx-x-circle',
};

const get = (name = null) => {
    if (!name) return icons;

    return icons[name] ?? null;
}

export default {
    icons,
    get
};