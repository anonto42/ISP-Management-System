import { model, models, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserIF {
    email: string;
    password: string;
    _id?: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
};

const userSchema = new Schema<UserIF>(
    {
        email:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 5)
    }
    next();
});

const User = models?.User || model<UserIF>("User",userSchema);

export default User;