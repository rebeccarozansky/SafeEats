
import { db,auth } from "./firebase";
import { numToBool,boolToNum,boolToAllergy } from "./converts";
import { get,ref } from "firebase/database";
const getUserInfo = async () => {
    try{
    const userId = auth.currentUser.uid;
    const userRef = ref(db, 'users/' + userId);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
        const userData = snapshot.val();
        const username = userData.username;
        const foodres = parseInt(userData.foodres,10);
        return boolToAllergy(numToBool(foodres))

      } else {
        console.log("User data doesn't exist in the database");
      }
    }catch(error){
        console.log(error)
    }

};

export {getUserInfo};