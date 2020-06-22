<template>
    <div>
        <!-- Instagram Section Begin -->
        <div class="instagram-photo">
            <div class="insta-item set-bg" style="background-image:url('img/insta-1.jpg')">
                <div class="inside-text">
                    <i class="ti-instagram"></i>
                    <h5><a href="#">shayna_gallery</a></h5>
                </div>
            </div>
            <div class="insta-item set-bg" style="background-image:url('img/insta-2.jpg')">
                <div class="inside-text">
                    <i class="ti-instagram"></i>
                    <h5><a href="#">shayna_gallery</a></h5>
                </div>
            </div>
            <div class="insta-item set-bg" style="background-image:url('img/insta-3.jpg')">
                <div class="inside-text">
                    <i class="ti-instagram"></i>
                    <h5><a href="#">shayna_gallery</a></h5>
                </div>
            </div>
            <div class="insta-item set-bg" style="background-image:url('img/insta-4.jpg')">
                <div class="inside-text">
                    <i class="ti-instagram"></i>
                    <h5><a href="#">shayna_gallery</a></h5>
                </div>
            </div>
            <div class="insta-item set-bg" style="background-image:url('img/insta-5.jpg')">
                <div class="inside-text">
                    <i class="ti-instagram"></i>
                    <h5><a href="#">shayna_gallery</a></h5>
                </div>
            </div>
            <div class="insta-item set-bg" style="background-image:url('img/insta-6.jpg')">
                <div class="inside-text">
                    <i class="ti-instagram"></i>
                    <h5><a href="#">shayna_gallery</a></h5>
                </div>
            </div>
        </div>
        <!-- Instagram Section End -->

        <!-- Partner Logo Section Begin -->
        <div class="partner-logo">
            <div class="container">
                <carousel class="logo-carousel container" :items="5" :dots="false" :autoplay="true" :nav="false">
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/logo-1.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/logo-2.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/logo-3.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/logo-4.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/logo-5.png" alt="" />
                        </div>
                    </div>
                </carousel>
            </div>
        </div>
        <!-- Partner Logo Section End -->
    </div>
</template> 

<script>
import carousel from 'vue-owl-carousel'
export default {
    name:'galery',
    components: { carousel }
}
</script>