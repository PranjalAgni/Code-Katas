/*
The Yeti is setting up the party livestream so everyone can watch
the festivities! He needs to distribute viewers across multiple
streaming servers to handle the load.

One of the developers implemented a round-robin load balancer 
(https://en.wikipedia.org/wiki/Round-robin_scheduling) to evenly
spread viewers across the servers. But something's wrong, 
the stream keeps cutting out after just a few viewers join!


The partygoers are getting restless and the Yeti is starting to 
panic. Can you figure out what's broken in this load balancer 
before the party starts?

*/

const SERVERS = [
  'server1.example.com',
  'server2.example.com',
  'server3.example.com',
];

function* getServerRoundRobinGenerator() {
  let idx = 0;
  const N = SERVERS.length;
  while (true) {
    yield SERVERS[idx % N];
    idx += 1;
  }
}
