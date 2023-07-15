module.exports = {
    mutipleMongooseToObject: function (mongoooses) {
        return mongoooses.map((mongoooses) => mongoooses.toObject());
    },
    mongoosetoObject: function (mongooose) {
        return mongooose ? mongooose.toObject() : mongooose;
    },
};
