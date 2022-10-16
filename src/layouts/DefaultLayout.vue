<script>

import { ref } from 'vue';

const MOBILE_WIDTH = 768;

export default {
    name: "DefaultLayout",
    components: { },

    setup() {
        let darkMode = ref(false);
        let inMobile = ref(false);
        let sidebar = ref({
            visible: false
        });

        return { darkMode, inMobile, sidebar };
    },

    created() {
        this.inMobile = this.isMobileWindowSize();
        if (this.inMobile)
            this.sidebar.visible = false;
        else this.sidebar.visible = true;
    },

    watch: {
        sidebar: {
            handler(nv) {
                if (!nv.visible) return;
                else this.monitorClickOut();
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

            if (this.darkMode) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark')
        },

        getCurrentWindowWidth() {
            return window.innerWidth;
        },

        isMobileWindowSize() {
            return this.getCurrentWindowWidth() <= MOBILE_WIDTH ? true : false;
        },

        monitorClickOut() {
            if (!this.inMobile) return;

            document.addEventListener("click", event => {
                if (event.target.classList.contains("btn-sidebar-toggler")) return;

                if (!this.$refs.refSidebar.contains(event.target)) {
                    this.sidebar.visible = false;
                }
            });
        },
    },

    computed: {
        computedStyle() {
            return this.sidebar.visible ? (this.inMobile ? "!block fixed z-index-50" : "") : null;
        }
    }
};

</script>

<template>

    <div class="wrapper">
        <div v-show="sidebar.visible" ref="refSidebar" class="sidebar"
            :class="computedStyle">

            <div class="py-3 text-center">
                <RouterLink :to="{name: 'home'}">
                    <span :class="['text-4xl text-gray-300', $helpers.icon.get('pieChartFill')]"></span>
                    <h1 class="text-xl">
                        <span class="font-bold text-gray-300">NAME</span>
                        <span class="font-semibold text-gray-500">PANEL</span>
                    </h1>
                </RouterLink>
            </div>

        </div>

        <div class="main">
            <div class="topbar">
                <button v-show="inMobile" @click="sidebarToggler" class="btn-sidebar-toggler">
                    <span :class="$helpers.icon.get('menu')"></span>
                </button>

                <button @click="darkToggler" class="ml-auto btn-theme-toggler" :class="$helpers.icon.get(darkMode ? 'togglerRightFill' : 'togglerLeft')">
                </button>
            </div>

            <div class="content">
                <div class="content-inner">
                    <slot name="content" />
                </div>
            </div>

            <div class="footer text-center py-2 text-gray-600 dark:text-gray-300">
                <small>
                    2022 &copy; <a href="https://github.com/ernandesrs/pproj_vueapp" title="Perfil no Github" target="_blank">Ernandes</a>
                </small>
            </div>
        </div>
    </div>

</template>

<style scoped>
button>span,
a>span{
    pointer-events: none;
}

.wrapper {
    @apply w-screen h-screen bg-gray-300 dark:bg-gray-600 dark:text-gray-300 grid grid-cols-12;
}

.sidebar,
.topbar,
.content {
    @apply py-3 px-4 lg:px-5;
}

.sidebar {
    @apply w-full max-w-xs h-full bg-slate-700 dark:bg-slate-700 col-span-3 xl:col-span-2 hidden md:block;
}

.topbar {
    @apply w-full flex items-center;
}

.topbar>button{
    @apply text-slate-700 dark:text-slate-300 rounded-md;
}

.topbar>.btn-sidebar-toggler {
    @apply text-2xl;
}

.topbar>.btn-theme-toggler {
    @apply !text-3xl;
}

.main {
    @apply w-full bg-gray-300 dark:bg-gray-600 flex flex-col col-span-12 md:col-span-9 xl:col-span-10;
}

.main>.content>.content-inner{
    @apply bg-gray-200 dark:bg-gray-500 border border-gray-400 dark:border-gray-600 px-3 py-3;
}

.main>.footer{
    @apply mt-auto;
}
</style>
