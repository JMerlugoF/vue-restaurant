import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

interface Restaurant {
  name?: string;
  adress?: string;
  status?: string;
  type?: string;
}

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  statusList = ["CLOSED", "OPEN", "GAP"];
  restaurantList: Restaurant[] = [];
  newRestaurant: Restaurant = {};

  addRestaurant() {
    this.restaurantList.push({
      name: this.newRestaurant.name,
      adress: this.newRestaurant.name,
      status: this.newRestaurant.status,
      type: this.newRestaurant.type,
    });
  }
}
