import './../../node_modules/boxicons/css/boxicons.min.css';

const icons = {
    app: 'bx bxs-square-rounded',

    menu: 'bx bx-menu',

    pieChartFill: 'bx bxs-pie-chart-alt-2',

    togglerLeft: 'bx bx-toggle-left',
    togglerRightFill: 'bx bxs-toggle-right',
};

const get = (name = null) => {
    if (!name) return icons;

    return icons[name] ?? null;
}

export default {
    icons,
    get
};