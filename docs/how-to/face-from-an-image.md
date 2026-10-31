# Build a face from an image

The order is parameters, then the face, then the DSP. It avoids rewiring later.

1. **Read first.** `npx maru guide read face-from-reference ui-kit-faces`.
2. **Run it.** `/face-from-reference path/to/image.png`.
3. **Starting fresh?.** `npx maru init my-face --face-first --params time,feedback,mix` gives a passthrough with those parameters bound.
4. **Compare.** Run `npx maru module screenshot .`, and put the capture beside your image. Say where they differ.
5. **Remove decoration.** Anything that implies behaviour the module lacks goes.
