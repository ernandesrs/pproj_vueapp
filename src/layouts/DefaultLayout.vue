<script>

import { ref } from 'vue';

const MOBILE_WIDTH = 768;

export default {
    name: "DefaultLayout",

    setup() {
        let inMobile = ref(false);
        let sidebar = ref({
            visible: false
        });

        return { inMobile, sidebar };
    },

    created() {
        if (this.isMobileWindowSize())
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
                    <h1 class="text-xl">
                        <span class="font-bold text-gray-200">NAME</span>
                        <span class="font-semibold text-gray-400">PANEL</span>
                    </h1>
                </RouterLink>
            </div>

        </div>

        <div class="main">
            <div class="topbar">
                <button @click="sidebarToggler" class="btn-sidebar-toggler">
                    MENU
                </button>
            </div>

            <div class="content">
                <slot name="content" />
            </div>
        </div>
    </div>

</template>

<style scoped>
.wrapper {
    @apply w-screen h-screen bg-gray-200 bg-gradient-to-b from-gray-200 to-slate-200 grid grid-cols-12;
}

.sidebar,
.topbar,
.content {
    @apply py-3 px-4 lg:px-5;
}

.sidebar {
    @apply w-full max-w-xs h-full bg-slate-800 col-span-3 xl:col-span-2 hidden md:block;
}

.topbar {
    @apply w-full;
}

.topbar>.btn-sidebar-toggler {
    @apply text-slate-700 border border-slate-500 px-2 py-1 rounded-md;
}

.main {
    @apply w-full bg-gray-200 bg-gradient-to-b from-gray-200 to-slate-200 col-span-12 md:col-span-9 xl:col-span-10;
}
</style>
