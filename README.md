# Sounds

A sound generation/track building application for the web tested in Chrome.

This app was created using:

- [React](https://reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## What does this app let you do?

- [x] Play notes/drums generated from the browsers apis.
- [x] Build tracks as combinations of notes/drums.
- [x] Save tracks to a local database to be played again in the future.
- [] Generate random tracks.
- [] Load tracks from file.
- [] Export tracks as importable format.

## What is a "track", understanding the data structure

A track is:

- Unique Identifier
- Name
- Created Date
- Group of layers
- Control Configuration

### What is a "layer"

A layer is a list of notes to be played in a specific order, each layer has a synth which is incharge of generating the sounds and some additional configuration information about the layer.

Multiple layers can be used within one track to create overlapping sounds

## How the applications logic should flow

1. On initial load the application will have an empty state and a open connection to the database
2. Fire a event to lookup the stored tracks and load them into the state
3. When preforming any action first the database then if successful create a new state from the previous containing the new data

## What needs to be done?

- Allow note length to be configured
- Allow synths to be configured via the add new layer screen or the edit layer screen.
- Add settings page to allow pre configuration for layers
- Add BPM changer to controls
- Add custom track view screen
- Add generate random track button on load
- Make about page more useful, more detailed and looking professional
