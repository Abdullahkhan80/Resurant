import mongoose from 'mongoose';
export const db=() => {
    mongoose.connect(process.env.MONGO_URI, {
       
        dbName: 'Resturant',
        
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}
