<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="80%">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Your order has been placed.
        </v-card-title>

        <!-- <v-divider></v-divider> -->
        <div class="order-details">
          <h2>Order {{ order._id }}</h2>
          <ul>
            <li>
              <div>Name:</div>
              <div>{{ order.name }}</div>
            </li>
            <li>
              <div>Email:</div>
              <div>{{ order.email }}</div>
            </li>
            <li>
              <div>Address:</div>
              <div>{{ order.address }}</div>
            </li>
            <li>
              <div>Date:</div>
              <div>{{ order.createdAt }}</div>
            </li>
            <li>
              <div>Total:</div>
              <div>{{ order.total }}</div>
            </li>
            <li>
              <div>Cart Items:</div>
              <div>
                <div v-for="item in order.items" :key="item._id">
                  <!-- <v-img :src="item.image" max-width="5rem" /> -->
                  {{ item.count }} X {{ item.title }}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    dialog: {
      get() {
        return this.showModal;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  }
};
</script>

<style scoped>
/* Order Details */
.order-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.order-details li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-details li div {
  padding: 10px;
}

.order-details .items {
  text-align: right;
  padding: 0;
}

.success-message {
  color: green;
}
</style>
