---
title: "Tight Coupling of Character, Word, and Place Recognition for End-to-End Text Recognition in Maps"
collection: publications
permalink: /publication/2019-Maps
excerpt: 'Text recognition in maps is a special case of general
text recognition that features some especially difficult challenges, including texts at extreme orientations, wide character spacings, complex text-like distractors, and unusual
non-dictionary strings. Off-the-shelf OCR systems, and
even sophisticated scene text recognition systems do not
work satisfactorily on many map-text recognition problems.
While many OCR and scene text systems have produced
high quality results by considering detection, recognition,
and error-correction as separate components, we believe
that map text recognition can benefit immensely from the
tight coupling of different components of an overall system. In particular, we present an end-to-end system for
recognizing text in maps that uses strong coupling in two
different ways. In the first, we train individual character
detectors, and use these detections as inputs in a new word
detection CNN architecture to improve word detection. We
show dramatic increases in word detection accuracy for a
strong baseline detection architecture. In the second contribution, we use a geographically-based lexicon to constrain
our interpretations of initial detections. If the lexicon suggests that the word detection is either too short, we “reprime” the word detector by inserting expected characters
locations back into the word detector using a novel input
mechanism. We then rerun the word detector using the additional character suggestions, giving a solid improvement
in accuracy. We report end-to-end recognition results on a
public map-text recognition benchmark.'
date: 2019
venue: 'Technical Report'
paperurl: 'https://web.cs.umass.edu/publication/docs/2019/UM-CS-2019-003.pdf'
citation: 'Ray, Archan. (2019). &quot;Tight Coupling of Character, Word, and Place Recognition for End-to-End Text Recognition in Maps.&quot; <i>Technical Report, College of Information and Computer Sciences, University of Massachusetts, Amherst, MA</i>. 1(1).'
---
This paper is about the number 1. The number 2 is left for future work.

[Download paper here](https://web.cs.umass.edu/publication/docs/2019/UM-CS-2019-003.pdf)

<!-- Recommended citation: Your Name, You. (2009). "Paper Title Number 1." <i>Journal 1</i>. 1(1). -->