<!-- An input with a placeholder that drifts when focusing. -->
<template>
    <!-- the element -->
    <div
        class="sub-input"
        :class="{
            focusing: isFocusing,
        }"
        @click="focusInput"
    >
        <!-- the input -->
        <input
            type="text"
            ref="subInput"
            @focus="focusIn"
            @blur="focusOut"
            @keyup="typeValidation"
            v-model="val"
        />
        <!-- the driftable placeholder -->
        <div class="placeholder text-h5" :class="{ drifted: isDrift }">
            placeholder
        </div>
        <!-- error message -->
        <div class="errormsg text-b2" v-show="isError">
            {{ errorMsg }}
        </div>
        <!-- ok icon -->
        <img src="" alt="" v-if="isOk" class="input-status-icon" />
        <!-- error icon -->
        <img src="" alt="" v-if="isError" class="input-status-icon" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFocusing: false,
            isDrift: false,
            isError: false,
            isOk: false,
            val: null,
            // validation for email
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        };
    },
    methods: {
        focusInput() {
            this.$refs.subInput.focus();
        },
        focusIn() {
            this.isFocusing = true;
            this.isDrift = true;
        },
        focusOut() {
            this.isFocusing = false;
            if (!this.val) this.isDrift = false;
        },
        // validation of every keydown
        typeValidation() {
            if (!this.val) {
                this.isOk = false;
                this.$emit("NAME OF UPDATE FUNCTION", {});
            } else {
                if (this.inputName === "Email Address") {
                    if (this.regex.test(this.val) !== true) {
                        this.isError = true;
                        this.isOk = false;
                        this.$emit("NAME OF UPDATE FUNCTION", {});
                    } else {
                        this.isError = false;
                        this.isOk = true;
                        this.$emit("NAME OF UPDATE FUNCTION", {});
                    }
                } else {
                    this.isOk = true;
                    this.$emit("NAME OF UPDATE FUNCTION", {});
                }
            }
        },
    },
};
</script>

<style lang="sass" scoped>
.sub-input
    height: 61px
    position: relative
    padding-top: 27px
    padding-bottom: 10px
    border-radius: 8px
    background: white
    width: 100%
    @screen xl
        width: 50%

    &.grey
        background: #F6F6F4
        @screen xl
            width: 40%
        input
            background: #F6F6F4

    &.shorter
        @screen xl
            width: calc( ( 100% - 48px ) / 2)

    &.focusing
        border: 1px solid #8E8E8F

    &.error
        padding-bottom: 6px
        border-bottom: 4px solid red !important
        color: red
        input[type="text"]
            color: black

    input[type="text"]
        width: 100%
        @apply text-h5
    input:focus
        outline: none

    .placeholder
        position: absolute
        left: 24px
        top: 17px
        color: #8E8E8F
        transition: 0.3s
        @apply text-h5

        &.drifted
            top: 9px
            @apply text-b2

        &.error
            color: red

    .errormsg
        position: absolute
        bottom: -24px
        left: 24px
        color: #E88080

    .input-status-icon
        width: 24px
        position: absolute
        top: 20px
        right: 24px
</style>
