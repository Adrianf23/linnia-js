const getRecord = async (recordsContract, dataHash) => {
  const res = await recordsContract.records.call(dataHash);
  const owner = res[0];
  const metadataHash = res[1];
  const sigCount = res[2];
  const irisScore = res[3];
  const dataUri = res[4];
  const timestamp = new Date(res[5] * 1000);
  return {
    owner,
    metadataHash,
    sigCount,
    irisScore,
    dataUri,
    timestamp,
  };
};

const getAttestation = async (recordsContract, dataHash, attestator) =>
  recordsContract.sigExists.call(dataHash, attestator);

export default {
  getRecord,
  getAttestation,
};
