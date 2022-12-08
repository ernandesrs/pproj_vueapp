<script>

import { ref } from 'vue';
import VueNav from '../components/Ui/Nav/VueNav.vue';
import VueIcon from '../components/Ui/VueIcon.vue';

const MOBILE_WIDTH = 1024;

export default {
    name: "DefaultLayout",

    components: { VueIcon, VueNav },

    setup() {
        let darkMode = ref(false);
        let inMobile = ref(false);
        let sidebar = ref({
            visible: false,
            navs: [
                {
                    text: 'Dashboard',
                    href: {
                        name: 'home',
                    },
                    target: '_self',
                    icon: 'pieChartFill'
                },
                {
                    text: 'Botões',
                    href: {
                        name: 'buttons',
                    },
                    target: '_self',
                    icon: 'app'
                },
                {
                    text: 'Colapsáveis',
                    href: {
                        name: 'collapses',
                    },
                    target: '_self',
                    icon: 'app'
                },
                {
                    text: 'Modais',
                    href: {
                        name: 'modals',
                    },
                    target: '_self',
                    icon: 'app'
                }
            ]
        });

        return { darkMode, inMobile, sidebar };
    },

    created() {
        this.inMobile = this.isMobileWindowSize();
        if (this.inMobile)
            this.sidebar.visible = false;
        else
            this.sidebar.visible = true;
        this.setWindowResizeMonitor();
    },

    watch: {
        sidebar: {
            handler(nv) {
                if (!nv.visible)
                    return;
                else
                    this.monitorClickOut();
            },
            deep: true,
        }
    },

    methods: {
        sidebarToggler() {
            this.inMobile = this.isMobileWindowSize();
            this.sidebar.visible = !this.sidebar.visible;
        },
        darkToggler() {
            this.darkMode = !this.darkMode;
            if (this.darkMode)
                document.documentElement.classList.add("dark");
            else
                document.documentElement.classList.remove("dark");
        },
        getCurrentWindowWidth() {
            return window.innerWidth;
        },
        isMobileWindowSize() {
            return this.getCurrentWindowWidth() <= MOBILE_WIDTH ? true : false;
        },
        monitorClickOut() {
            if (!this.inMobile)
                return;
            document.addEventListener("click", event => {
                if (event.target.classList.contains("btn-sidebar-toggler"))
                    return;
                if (!this.$refs.refSidebar.contains(event.target)) {
                    this.sidebar.visible = false;
                }
            });
        },
        setWindowResizeMonitor() {
            window.addEventListener("resize", () => {
                if (this.isMobileWindowSize() && !this.inMobile) {
                    this.inMobile = true;
                    this.sidebar.visible = false;
                }
                else if (!this.isMobileWindowSize() && this.inMobile) {
                    this.inMobile = true;
                    this.sidebar.visible = true;
                }
            });
        }
    },

    computed: {
        computedStyle() {
            return this.sidebar.visible ? (this.inMobile ? "!block" : "") : null;
        }
    }
};

</script>

<template>

    <div class="wrapper">
        <Transition enter-from-class="-translate-x-full"
            enter-active-class="duration-500 ease-in-out" enter-to-class="translate-x-0"
            leave-from-class="translate-x-0" leave-active-class="duration-300 ease-out"
            leave-to-class="-translate-x-full">
            <div v-show="sidebar.visible" ref="refSidebar" class="sidebar"
                :class="computedStyle">

                <div class="py-3 text-center">
                    <RouterLink :to="{ name: 'home' }">
                        <vue-icon icon="pieChartFill" class="text-gray-300 text-4xl" />
                        <h1 class="text-xl">
                            <span class="font-bold text-gray-300">NAME</span>
                            <span class="font-semibold text-gray-500">PANEL</span>
                        </h1>
                    </RouterLink>
                </div>

                <div class="py-3 flex flex-col">
                    <vue-nav :items="sidebar.navs" vertical activable />
                </div>

            </div>
        </Transition>

        <div class="main">
            <div class="topbar">
                <button v-show="inMobile" @click="sidebarToggler"
                    class="btn-sidebar-toggler">
                    <span :class="$helpers.icon.get('menu')"></span>
                </button>

                <button @click="darkToggler" class="ml-auto btn-theme-toggler"
                    :class="$helpers.icon.get(darkMode ? 'togglerRightFill' : 'togglerLeft')">
                </button>
            </div>

            <div class="content">
                <div class="content-inner">
                    <slot name="content" />
                </div>
            </div>

            <div class="footer text-center py-2 text-gray-600 dark:text-gray-300">
                <small>
                    2022 &copy; <a href="https://github.com/ernandesrs/pproj_vueapp"
                        title="Perfil no Github" target="_blank">Ernandes</a>
                </small>
            </div>
        </div>
    </div>

</template>

<style scoped>
button>span,
a>span {
    pointer-events: none;
}

.wrapper {
    @apply w-full h-screen bg-gray-300 dark:bg-gray-600 dark:text-gray-300 grid grid-cols-12 text-slate-700 font-normal;
}

.sidebar,
.topbar,
.content {
    @apply py-3 px-4 lg:px-5;
}

.sidebar {
    /* base */
    @apply w-full max-w-[80vw] h-full bg-slate-700 dark:bg-slate-800 fixed top-0 left-0 z-50;

    /* sm */
    @apply sm:max-w-[275px];

    /* lg */
    @apply lg:max-w-full lg:relative lg:col-span-3 xl:col-span-2 lg:translate-x-0 lg:block;
}

.topbar {
    @apply w-full flex items-center;
}

.topbar>button {
    @apply text-slate-700 dark:text-slate-300 rounded-md;
}

.topbar>.btn-sidebar-toggler {
    @apply text-2xl;
}

.topbar>.btn-theme-toggler {
    @apply !text-3xl;
}

.main {
    @apply w-full bg-gray-300 dark:bg-gray-600 flex flex-col col-span-12;

    /* lg */
    @apply lg:col-span-9 xl:col-span-10;
}

.main>.content>.content-inner {
    @apply bg-gray-200 dark:bg-gray-500 border border-gray-400 dark:border-gray-600 px-3 py-3;
}

.main>.footer {
    @apply mt-auto;
}
</style>
