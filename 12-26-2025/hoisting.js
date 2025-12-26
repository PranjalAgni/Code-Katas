/*
The eggnog supply is running dangerously low! The Yeti rushes to order emergency 
refills from multiple suppliers at once. He fires off a batch of payment requests 
and waits for the audit log to confirm everything went through.

But when he checks the log, something's very wrong. The credit card charges went 
through, but now there's no way to tell who actually got paid.

The payment system is supposed to track which supplier ID was processed in each 
transaction, but the audit log is a complete mess. Can you fix the batch payment 
processor so each charge gets recorded with the correct supplier ID?
*/

function preparePaymentBatch(userIds, productId) {
  const paymentRequests = [];

  for (let i = 0; i < userIds.length; i++) {
    let currentId = userIds[i];

    paymentRequests.push({
      userId: currentId,
      productId,
      callback: function (err, result, auditLog) {
        auditLog.push({
          recordedId: currentId,
          status: err ? 'Failed' : 'Success',
          productId,
        });
      },
    });
  }

  return paymentRequests;
}
