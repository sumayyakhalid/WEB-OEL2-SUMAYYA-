import mongoose from 'mongoose';

const Connection = async () => {
    const URL =`mongodb://sumayyakhalid:12345@ac-tmy0mkc-shard-00-00.0otm7mr.mongodb.net:27017,ac-tmy0mkc-shard-00-01.0otm7mr.mongodb.net:27017,ac-tmy0mkc-shard-00-02.0otm7mr.mongodb.net:27017/XYX?ssl=true&replicaSet=atlas-abs5od-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
