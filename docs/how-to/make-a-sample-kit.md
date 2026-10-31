# Make a sample kit

A kit or sampler bank does not need a custom module. Choose the lightest route.

1. **Choose a route.** `npx maru guide read sample-kits-and-banks` compares a generated kit, a pitched instrument, a bank and a Sampler module.
2. **Generate or bring sounds.** Run `/generate-sounds`. Hosted generation can cost money, so it asks first.
3. **Record rights.** Each file gets an entry in `design/assets.md`. Run `/asset-audit`.
4. **Load into a module, if needed.** `npx maru guide read assets-and-resources`. Audio loads through declared resource slots.
