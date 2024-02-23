import connectDB from './config/db.js'
import User from './model/userModel.js'
import users from './model/data/users.js'
import Problem from './model/problemModel.js'
import Contest from './model/contestModel.js'
import contests from './model/data/contests.js'
import problems from './model/data/problems.js'

connectDB()

const seedData = async() => {
    try {
        await User.deleteMany();
        await Problem.deleteMany();
        await Contest.deleteMany();
        const createdUsers = await User.insertMany(users);
        await Problem.insertMany(problems);
        const sampleContests = contests.map((contest) => contest?.creator ? contest : {...contest, creator: createdUsers[0]._id});
        await Contest.insertMany(sampleContests);
        console.log("Seed data successfully");
        process.exit();
    } catch (error) {
        console.log(error?.data?.message || error.error);
        console.log("Error in seeding data");
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        console.log("Destroying...")
        await User.deleteMany();
        await Problem.deleteMany();
        await Contest.deleteMany();
        console.log("Delete data successfully")
        process.exit();
    } catch (error) {
        console.log("Error in destroying data");
        process.exit(1);
    }
}

if(process.argv[2] == '-d'){
    destroyData();
} else {
    seedData();
}