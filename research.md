---
layout: page
title: Research
---

<style>
.research-fig { width: 320px; max-width: 100%; font-size: 70%; text-align: center; margin-bottom: 1em; }
.research-fig img { width: 100%; padding-bottom: 0.5em; }
.research-fig.right { float: right; margin-left: 1em; }
.research-fig.left { float: left; margin-right: 1em; }
.research-fig.wide { width: 450px; }
.research-fig.full { width: 80%; max-width: none; margin: 0.5em auto 1.5em; }
h1 { clear: both; }
</style>

I'm a geophysical fluid dynamicist. I want to understand how the ocean's small scales (eddies, waves, and turbulence) shape its large-scale circulation and, through that, the climate. I combine theory, idealised models of increasing complexity, and realistic simulations. A big part of my effort goes into building new open-source, GPU-native ocean and climate models. With these, the gap between theory and simulation in climate science gets narrower, because the simulations we can run get closer to the questions we want to ask.


<h2 id="southern-ocean"></h2><br/>
# Southern Ocean and the Antarctic margin

<div class="research-fig right"><img src="../img/acc.png" alt="The Antarctic Circumpolar Current" /><br/>Credit: NASA/JPL</div>

The Antarctic Circumpolar Current (ACC) is the largest current in the ocean. It connects all ocean basins and plays a central role in the climate by setting up the meridional overturning circulation and controlling how heat and carbon move around the ocean. The westerly winds that drive the ACC have strengthened and shifted polewards in recent decades.

How does the ACC respond to stronger winds? Observations and eddy-resolving models suggest that its transport is remarkably insensitive to wind changes, a phenomenon known as *eddy saturation*. Using conceptual models of increasing complexity, from [quasi-geostrophic turbulence on a beta plane above topography][topo-1layer-paper]{:target="_blank"} to [a primitive-equation channel model][eddysaturation-BC-BT-paper]{:target="_blank"}, I've worked to delineate the roles of [barotropic][eddysaturation-paper]{:target="_blank"} and baroclinic processes, and of bathymetry, in the ACC's response to changing winds. The Southern Ocean's eddy field is also strongly chaotic, and its [intrinsic variability differs markedly around the continent][occiput-SO-paper]{:target="_blank"}.

Closer to Antarctica, the Antarctic Slope Current acts as a barrier between the warm Circumpolar Deep Water offshore and the floating ice shelves. We showed that warm water can cross this barrier through submarine canyons in [intrinsically episodic intrusions][asc-intrusions-paper]{:target="_blank"}, even under steady forcing. We also showed that meltwater from Antarctica can [transiently weaken the Slope Current][asc-meltwater-paper]{:target="_blank"}, which may open the door for more warm water to reach the ice ([read more in The Conversation][theconversation-asc-meltwater]{:target="_blank"}).

These processes span scales from the circumpolar current down to bottom mixing and surface waves. We review how they connect in [*Closing the loops on Southern Ocean dynamics*][review-SO-paper]{:target="_blank"} ([read more in The Conversation][theconversation-so-review]{:target="_blank"}).


<h2 id="parametrizations"></h2><br/>
# Parametrizations: physics-informed and data-driven

<div class="research-fig left"><img src="../img/ML.png" alt="Machine learning can enhance the accuracy of climate model parametrizations. [GFDL CM2.6 Climate Model]" /><br/>Credit: GFDL</div>

Climate projections require simulations hundreds of years long, so climate models cannot afford to resolve every scale of oceanic motion. Instead, they rely on parametrizations: models for the collective effect of unresolved motions on the scales the model does resolve. Better parametrizations come from understanding the underlying dynamics, and increasingly from learning from high-resolution data.

With the ocean team of the [Climate Modeling Alliance (CliMA)][clima-website]{:target="_blank"}, we developed [CATKE][catke-physics-paper]{:target="_blank"}, a one-equation parametrization for vertical mixing in the ocean's surface boundary layer. Its free parameters are calibrated automatically against large-eddy simulations using [Ensemble Kalman Inversion][eki-paper]{:target="_blank"}, with tools like [ParameterEstimocean.jl](../software). This approach, physics-based closures whose parameters are learned from data, is how I think parametrizations should be built: interpretable, but systematically constrained by high-fidelity simulations.

Supported by a Discovery Early Career Research Award from the Australian Research Council (awarded in 2021), I've also been developing data-driven, physics-informed parametrizations for the ocean's mesoscale eddy fluxes, using output from eddy-resolving models together with machine-learning methods. Beyond eddies and boundary layers, we have also [evaluated and improved parametrizations of wave and non-wave stresses][wave-stress-paper]{:target="_blank"} that arise when oceanic flows interact with rough bathymetry.

Read more about how machine learning can enhance the accuracy of climate and ocean models in [The Conversation][theconversation-mlclimate]{:target="_blank"}.


<h2 id="variability"></h2><br/>
# Climate variability

Not all ocean variability is forced by the atmosphere. A significant part is *intrinsic*: it emerges from the ocean's own nonlinear, eddying dynamics. We showed that this intrinsic ocean variability [contributes substantially to decadal variations in upper-ocean heat content][intrinsic-ocean-var-paper]{:target="_blank"}, and can then feed back onto the atmosphere through air–sea interactions. This is something coupled climate models that do not resolve mesoscale eddies cannot capture.

<div class="research-fig full"><img src="../img/eke-trends.jpg" alt="Trends in surface eddy kinetic energy from satellite altimetry, 1993–2020" /><br/>Trends in surface eddy kinetic energy, 1993–2020.<br/>Credit: Martínez-Moreno et al. (2021), <i>Nat. Clim. Change</i></div>

The ocean's mesoscale is also changing. Using a framework for [estimating the kinetic energy of eddy-like features from satellite altimetry][TrackEddies-SSH-paper]{:target="_blank"}, we found [global changes in oceanic mesoscale currents over the satellite altimetry record][global-eke-trends-paper]{:target="_blank"}: eddy kinetic energy has increased in many energetic regions of the ocean over the past few decades ([read more in The Conversation][theconversation-globaleketrends]{:target="_blank"}).

At the scale of ocean basins, I'm interested in how modes of climate variability shape the climate far from where they originate. For example, we have been characterising the [diversity of La Niña events and their impacts on Pacific teleconnections][la-nina-paper]{:target="_blank"}.


<h2 id="models"></h2><br/>
# Next-generation ocean and climate models

<div class="research-fig left"><img src="../img/agulhas-vorticity.jpg" alt="Surface vorticity in the Agulhas region from a 1/48-degree Oceananigans simulation" /><br/>Surface vorticity in the Agulhas region from a 1/48° near-global Oceananigans simulation.<br/>Credit: Silvestri et al. (2025), <i>J. Adv. Model. Earth Sy.</i></div>

How well we understand the climate is limited by the simulations we can afford to run. Over the past few years, a large part of my work has been building a new generation of open-source ocean and climate model components in [Julia](https://julialang.org){:target="_blank"}. These components are designed from scratch to run on GPUs and to be easy to use, extend, and couple to data-driven tools.

I'm one of the core developers of [Oceananigans][oceananigans-paper]{:target="_blank"}, a library for ocean simulations at all scales, from large-eddy simulations of boundary-layer turbulence to global ocean models. Oceananigans' [GPU-based hydrostatic dynamical core][mesoscale-gpu-dycore-paper]{:target="_blank"} makes [mesoscale-resolving global ocean simulations][oceananigans-scalings-paper]{:target="_blank"} routine rather than heroic. Getting there also needed new numerics, such as a [WENO-based momentum advection scheme][weno-paper]{:target="_blank"} tailored to mesoscale turbulence and a [low-storage Runge–Kutta framework][rk-paper]{:target="_blank"} for nonlinear free-surface ocean models. I've also contributed to [OceanBioME][oceanbiome-paper]{:target="_blank"}, for coupled ocean biogeochemistry and physics, and to the atmospheric general circulation model [SpeedyWeather][speedyweather-paper]{:target="_blank"}.

### Air–sea interactions and coupled modelling

The ocean and atmosphere constantly exchange momentum, heat, and freshwater, and many of the questions above, from intrinsic variability to the response of the Southern Ocean to changing winds, are fundamentally coupled problems. To tackle them, I'm a co-owner of [NumericalEarth][numericalearth-org]{:target="_blank"}, the organisation behind [Breeze][breeze-repo]{:target="_blank"}, a GPU-native atmosphere model built on Oceananigans that spans large-eddy simulations up to the mesoscale, and [NumericalEarth.jl][numericalearth-repo]{:target="_blank"}, a framework that couples ocean, sea ice, atmosphere, and land components. With these tools, the ocean and atmosphere can be simulated together at resolutions where air–sea interactions at the oceanic mesoscale and below are explicitly resolved.

See the [software](../software) page for more.


<h2 id="earlier-work"></h2><br/>
# Earlier work: turbulence and coherent structures

<div class="research-fig right"><img src="../img/jetstream.png" alt="Earth's polar jet-stream" /><br/>Credit: NASA GSFC</div>

**Statistical state dynamics of jets.** Planetary atmospheres self-organize into large-scale coherent structures, such as Earth's jet streams, that are maintained by the turbulence they coexist with. Classical [stability analysis][stabilitywiki]{:target="_blank"} assumes that a mean state exists without the fluctuations, so it can't describe these structures. In [my doctoral thesis][phdthesis]{:target="_blank"} and afterwards, I used [*Statistical State Dynamics*][SSDreview-paper]{:target="_blank"} (SSD), the dynamics of the flow statistics themselves, to predict [how homogeneous turbulence self-organizes into jets][s3t-jets-jas-paper]{:target="_blank"}, [the mechanism behind this self-organization][s3t-stab-jas-paper]{:target="_blank"}, [how jets equilibrate at finite amplitude][ssd-eckaus-paper]{:target="_blank"}, and [how jets, large-scale waves, and turbulence coexist][ssd-jet-wave-paper]{:target="_blank"}.

**Gas giants.** With [Jeffrey Parker][jeffsite]{:target="_blank"}, we showed that magnetic fields in the interior of gas giants can [suppress the formation of zonal jets][magneticZF-paper]{:target="_blank"}, and that turbulent magnetic fluctuations act on the mean flow as an effective ["magnetic viscosity"][magneticviscosity-paper]{:target="_blank"}. This mechanism offers a plausible explanation for the depth of the jets on [Jupiter][Juno-paper]{:target="_blank"} and [Saturn][Cassini-paper]{:target="_blank"} revealed by *Juno* and *Cassini*.

**Wall-bounded turbulence.** With [Adrián Lozano-Durán][adriansite]{:target="_blank"} and others, we studied [very-large-scale roll–streak motions][vlsm-poiseuille-paper]{:target="_blank"} in channel flows. We also showed that the modal instabilities of streaks [are *not* the main route][ModallyStableTurb-paper]{:target="_blank"} by which energy is transferred to turbulent fluctuations, and probed the [cause and effect of the linear mechanisms sustaining wall turbulence][cause-effect-paper]{:target="_blank"}.


[jeffsite]: https://scholar.google.com/citations?user=_w6i1bEAAAAJ&hl=en
[adriansite]: https://aeroastro.mit.edu/people/adrian-lozano-duran/
[stabilitywiki]: https://en.wikipedia.org/wiki/Hydrodynamic_stability
[clima-website]: https://clima.caltech.edu
[Juno-paper]: https://doi.org/10.1038/nature25793
[Cassini-paper]: https://doi.org/10.1126/science.aat2965
[SSDreview-paper]: http://users.uoa.gr/~pjioannou/papers/SSD_review.pdf
[phdthesis]: ../theses/PhD_thesis_Navid.pdf

[breeze-repo]: https://github.com/NumericalEarth/Breeze.jl
[numericalearth-org]: https://github.com/NumericalEarth
[numericalearth-repo]: https://github.com/NumericalEarth/NumericalEarth.jl
[eki-paper]: https://doi.org/10.21105/joss.04869

[theconversation-asc-meltwater]: https://theconversation.com/antarctica-has-its-own-shield-against-warm-water-but-this-could-now-be-under-threat-255738
[theconversation-so-review]: https://theconversation.com/giant-waves-monster-winds-and-earths-strongest-current-heres-why-the-southern-ocean-is-a-global-engine-room-233669
[theconversation-mlclimate]: https://theconversation.com/how-machine-learning-is-helping-us-fine-tune-climate-models-to-reach-unprecedented-detail-165818
[theconversation-globaleketrends]: https://theconversation.com/satellites-reveal-ocean-currents-are-getting-stronger-with-potentially-significant-implications-for-climate-change-159461

[topo-1layer-paper]: ../publications/betaplane-topo-1.pdf
[eddysaturation-paper]: ../publications/EddySaturation-JPO-2018.pdf
[eddysaturation-BC-BT-paper]: ../publications/EddySaturation-BC-BT.pdf
[occiput-SO-paper]: ../publications/occiput-SO.pdf
[asc-intrusions-paper]: ../publications/asc_canyon_intrusions.pdf
[asc-meltwater-paper]: ../publications/asc-meltwater.pdf
[review-SO-paper]: ../publications/review-multiscale-SO.pdf
[catke-physics-paper]: ../publications/catke-physics.pdf
[wave-stress-paper]: ../publications/internal-tide-parameterizations.pdf
[intrinsic-ocean-var-paper]: ../publications/intrinsic-oceanic-decadal-variability.pdf
[TrackEddies-SSH-paper]: ../publications/TrackEddies-SSH.pdf
[global-eke-trends-paper]: ../publications/global-eke-trends.pdf
[la-nina-paper]: ../publications/LaNina-flavours.pdf
[oceananigans-paper]: ../publications/oceananigans-overview.pdf
[oceananigans-scalings-paper]: ../publications/oceananigans-scalings.pdf
[mesoscale-gpu-dycore-paper]: ../publications/mesoscale-gpu-dycore.pdf
[weno-paper]: ../publications/weno-ILES.pdf
[rk-paper]: ../publications/RK-timestepper.pdf
[oceanbiome-paper]: ../publications/oceanbiome.pdf
[speedyweather-paper]: ../publications/speedyweather.pdf
[s3t-jets-jas-paper]: ../publications/S3T_jas.pdf
[s3t-stab-jas-paper]: ../publications/S3T_barotropic_stability.pdf
[ssd-eckaus-paper]: ../publications/SSD_Eckhaus.pdf
[ssd-jet-wave-paper]: ../publications/SSD_JetWave.pdf
[magneticZF-paper]: ../publications/magneticZF-2018.pdf
[magneticviscosity-paper]: ../publications/magneticviscosity-2019.pdf
[vlsm-poiseuille-paper]: ../publications/VLSM-Poiseuille.pdf
[ModallyStableTurb-paper]: ../publications/ModallyStableTurb.pdf
[cause-effect-paper]: ../publications/cause-effect-linearmechanism.pdf
