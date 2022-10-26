<template>
    <div class="page-programs">
        <div class="swiper" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
export default {
    data() {
        return {
            mySwiper: null
        }
    },
    methods: {
        initSwiper() {
            const el = this.$refs.swiper;
            if (!el) return;
            if (this.mySwiper && this.mySwiper.destroy) this.mySwiper.destroy();
            let thus = this;
            this.mySwiper = new Swiper(el, {
                slidesPerView: "auto",
                spaceBetween: 0,
                centeredSlides: true,
                speed: 1200,
                navigation: {
                    nextEl: this.$refs.btnNext,
                    prevEl: this.$refs.btnPrev,
                },
            });
        },

    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(this.initSwiper, 0);
        });
    },
}
</script>

<style>

</style>