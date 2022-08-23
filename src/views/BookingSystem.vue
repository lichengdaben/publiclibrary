<template>
<div class="BookingSystem">
    <div v-if="isMobile()">
        <BookingSystemH5/>
    </div>
    <div v-else>
    </div>
    <div>
          
        <b-container class="bv-example-row">
        <p>電腦設施網上預約系統</p>
         <p>COMPUTER FACILITIES ONLINE BOOKING SYSTEM</p>
            <b-row class="squaregroup">
                <b-col type=button class="square1">
                 <font-awesome-icon icon="fa-solid fa-display" />
                <div>我要預約 </div>
                <div>Book Now</div>
                </b-col>
                <b-col class="squareline" >
                    <b-col class="square2">
                      <div>  電腦設施 </div>
                      <div>  Computer Facilities </div>
                    </b-col>
                    <b-col class="square2">
                        <div>我的預約 </div>
                       <div> My Booking</div>
                    </b-col>
                </b-col>
                <b-col class="squareline" >
                    <b-col class="square2">
                    <div>如何預約 </div>
                     <div>   How to Book</div>
                    </b-col>
                    <b-col class="square2">
                      <div>  常見問題</div>
                      <div>  FAQ</div>
                    </b-col>
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>


<script>
    import BookingSystemH5 from './BookingSystemH5.vue'
    
    import {  mixins } from '@/common/mixins'

    export default {
        name: 'BookingSystem',
        components: {
           BookingSystemH5
        },
        data() {
            return {
                active: false,
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {

    }}
</script>

<style scoped>
.square1{
    width:233px;
    height:233px;
    background: #F2653E 0% 0% no-repeat padding-box;
    border-radius: 38px;
    opacity: 1;
    text-align: center;
}
.square2{
width: 175px;
height: 175px;
background: #F2653E 0% 0% no-repeat padding-box;
border-radius: 26px;
opacity: 1;
margin:20px;
text-align: center;
}

.squareline{
display:flex;
justify-content: center;
align-items: center;
text-align: center;
}

div{
   color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 20px/26px Roboto;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}

.svg-inline--fa {
    display: var(--fa-display, inline-block);
    height: 2em;
    overflow: visible;
    vertical-align: -0.125em;
}
p{
color: var(--unnamed-color-000000);
text-align: left;
font: normal normal bold 26px/34px Roboto;
letter-spacing: 0px;
color: #000000;
text-transform: uppercase;
opacity: 1;
margin:0;
font-weight:bold
}
.squaregroup{
display:flex;

}
</style>