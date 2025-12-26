/*
The party photo booth is a huge hit! Guests are lining up to snap festive pictures 
with props and filters. But there's a major problem brewing behind the scenes.

The Yeti just discovered that none of the photos are getting backed up to the cloud 
storage system. The photo data streams in perfectly, gets processed for printing, 
but when the backup system tries to save copies, it comes up empty every time.

The print queue is working fine and photos are coming out beautifully, yet the 
backup storage shows zero bytes saved. Something's going wrong in the way the photo 
stream is being handled. Can you fix the backup system before all these memories 
are lost forever?
*/

function processStream() {
  // gets stream generator
  const processedData = prePrintProcessing(readStream());
  const backedUpBytes = backupData(readStream());

  return {
    processedData,
    backedUpBytes,
  };
}
