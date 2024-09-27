# OxiFluxion

A precision floating math library for Rust and an accompanying program to use it.

NOT READY FOR PRODUCTION USAGE!

## OxiMath

OxiMath is designed to avoid floating point math inaccuracies by running computations on values with directly implemented operations, rather than relying on a co-processor's physical implementation which introduces errors often.

OxiMath is not designed for speed, although it calculations can be sped up with external API's like Vulkan if desired.


## Fluxion

A multifunction calculator application that implements OxiMath as its basis for calculations.

## To-Do

- [ ] Setup documentation with auto-builds
- [ ] Setup CI/CD testing
