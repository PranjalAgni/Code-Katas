/*
The Yeti spent hours setting up the perfect party playlist, complete with a 
premium audio streaming service. He locked down the system configuration to 
prevent any pranksters from messing with the music during the party.

Everything seemed secure at first, but suddenly the audio stream started playing 
weird sounds and distorted audio. Someone is tampering with the streaming API 
credentials! The Yeti is certain he secured the configuration properly.

Can you fix the security before the playlist turns into chaos?
*/

function deepFreeze(obj) {
  const properties = Object.getOwnPropertyNames(obj);

  for (const prop of properties) {
    const value = obj[prop];

    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

function secureConfig(config) {
  deepFreeze(config);
  return config;
}
