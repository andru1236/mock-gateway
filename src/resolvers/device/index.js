import deviceMutations from "./mutations";
import deviceQueries from "./queries";
import deviceDataLoaders from "./dataLoaders";

const Device = {
  id: (obj) => obj._id,
};

export { deviceMutations, deviceQueries, deviceDataLoaders, Device };
