import { Collection } from "./models/Collection";
import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.fetch();

function test() {
  console.log(collection.models);
}

setTimeout(test, 5000);
