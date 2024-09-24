---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

### Research Interest

Broadly I am interested in developing computationally efficient algorithms. These methods have become extremely relevant in today's world of million sized datasets and massive parametrized learning models. More recently I have been working on *sublinear* algorithms for matrices, i.e., algorithms that run in time less than the number of inputs. Matrices are often used to represent data and parameters of learning models, and as such large datasets and complex learning models have lead to a requirement for efficient computational algorithms. The body of my work has been on pushing the boundaries of sublinear time or sublinear query algorithms in context of matrices and their applications. Applications include -- model compression, approximate learning functions, fast search and recommendation systems, near-optimal deep nets, and approximate feature embeddings.

<!---
Broadly I am interested in approximating large matrices. These methods, applicable and prevalent in literature, have become especially relevant in today's world of million sized datasets and applications including but not limited to NLP. Specifically I am interested in designing approximations to matrices in *sublinear* time, i.e. algorithms that requires number of operations greater than the size of a dataset but lesser than the square of the size of a dataset. Applications include the study of quadratic forms and differential equations. On similar lines, a particular area of interest for me is Kernel approximation. A [kernel](https://arxiv.org/pdf/math/0701907.pdf) is often a [PSD matrix](https://onlinelibrary.wiley.com/doi/pdf/10.1002/9780470173862.app3) (and sometimes indefinte like [reproducing Krien spaces](https://arxiv.org/pdf/1309.2393.pdf)) which *stores* [inner product](https://mathworld.wolfram.com/InnerProduct.html) of data points in a dataset. These inner products can be in the input space but often is in a high dimensional space induced by a mapping function. Thus computations for big datsets are again non-trivial. Approximating them when such inducing functions are changing or the size of dataset growing is of interest to the community (like [GDPR](https://gdpr-info.eu)). My overarching research goal is to find solutions to these problems using techniques borrowed from linear algebra and functional analysis.
--->

Prior to this I have dabbled unsuccessfully in computer vision, where I was working on detecting and recognizing texts in maps. I also worked on image synthesis in the kernel induced space during my masters.

### Papers

(author ordering for the papers below is alphabetical if marked \*)

- [Approximating Eigenvalues of Symmetric Matrices using Matrix-Vector Query Algorithms\*]()
  <br>
  Cameron Musco, Archan Ray
  <br>
  in preparation.

- [Universal Matrix Sparsifiers and Fast Deterministic Algorithms for Linear Algebra\*](https://arxiv.org/abs/2305.05826)
  <br>
  Rajarshi Bhattacharjee, Gregory Dexter, Cameron Musco, Archan Ray, Sushant Sachdeva, David P Woodruff
  <br>
  Innovations in Theoretical Computer Science (ITCS) 2024.<br>
  <details><summary> Abstract | <a href="https://www.youtube.com/watch?v=tvC38VBKLVY"> Video </a> from Rajarshi's talk at ITCS </summary>. 
  Given a matrix $\mathbf A \in \mathbb{R}^{n \times n}$ which is normalized so that its entries are bounded in magnitude by $1$, it is well-known that if $S \subset [n] \times [n]$ is a uniformly random subset of $s= \tilde{O}(n/\epsilon^2)$ entries of $\mathbf A$, and if ${\mathbf A}_S$ equals $\mathbf A$ on the entries in $S$ and is zero on the entries outside of $S$, then $\|\mathbf A - \frac{n^2}{s} \cdot {\mathbf A}_S\|_2 \le \epsilon n$ with high probability, where $\|\cdot\|_2$ is the spectral norm. We show that for positive semidefinite (PSD) matrices, no randomness is needed at all in this statement. Namely, there exists a <i>fixed subset</i> $S$ of $s = \tilde{O}(n/\epsilon^2)$ entries that acts as a <i>universal sparsifier</i>: $\|\mathbf A - \frac{n^2}{s} \cdot {\mathbf A}_S\|_2 \le \epsilon n$ holds <i>simultaneously for every bounded entry PSD matrix $\mathbf A \in \mathbb{R}^{n \times n}$</i>. One can view this result as a significant extension of a spectral expander. Indeed,  if we set $\mathbf A$ to be the all ones matrix, then ${\mathbf A}_S$ matches the near-optimal spectral expansion of Ramanujan graphs, up to logarithmic factors. But here our ${\mathbf A}_S$ sparsifies any bounded entry PSD matrix, not just the all ones matrix. We leverage the existence of such universal sparsifiers to give the first <i>deterministic algorithms</i> for several central linear algebraic problems, including singular value and singular vector approximation and positive semidefiniteness testing, that run in faster than matrix multiplication time. This partially addresses a significant gap between randomized and deterministic algorithms for fast linear algebraic computation.<br>


  While our primary construction of universal sparsifiers is non-explicit, we also give an explicit polynomial time construction with $\tilde{O}(n/\text{poly}(\epsilon))$ entries. A key technique we introduce is <i>diagonal-charging</i>, which allows us to bound how concentrated the entries of the eigenvectors of a bounded entry PSD matrix can be on a small subset of coordinates. Our results also extend to give the first non-trivial universal sparsification bounds for non-PSD matrices. In this case, we show there exists a subset $S$ of $s = \tilde O(n/\epsilon^4)$ entries for which for any bounded entry matrix $\mathbf A$, we have $\|\mathbf A - \frac{n^2}{s} \cdot {\mathbf A}_S\|_2 \le \epsilon \cdot \max(n,\|\mathbf A\|_1)$, where $\|\mathbf A\|_1$ is the trace norm of $\mathbf A$. We prove that  this is optimal up to an $\tilde O(1/\epsilon^2)$ factor. Finally, if $\mathbf A \in \{-1,0,1\}^{n \times n}$ is PSD, we show that a spectral approximation $\mathbf{\tilde A}$ with $\|\mathbf A - \mathbf{\tilde A}\|_2 \le \epsilon n$ can be obtained by deterministically reading $\tilde O(n/\epsilon)$ entries of $\mathbf A$. This improves on our result for general PSD matrices by a $1/\epsilon$ factor and is information-theoretically optimal up to a logarithmic factor in its sample complexity.
  </details>

- [Sublinear Time Eigenvalue Approximation via Random Sampling\*](https://arxiv.org/abs/2109.07647)
  <br>
  Rajarshi Bhattacharjee, Gregory Dexter, Petros Drineas, Cameron Musco, Archan Ray
  <br>
  extended abstract in International Colloquium on Automata, Languages, and Programming (ICALP) 2023, full paper in Algorithmica. <br>
  <details><summary> Abstract | <a href="https://github.com/archanray/eigenvalue_estimation"> Code </a> | <a href="https://people.cs.umass.edu/~cmusco/personal_site/pdfs/sublinearEigenvaluesTalk.pdf"> Slides </a>from Cameron's talk at the Algorithms and Foundations for Data Science Workshop, NUS.</summary>
  We study the problem of approximating the eigenspectrum of a symmetric matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ with bounded entries (i.e., $\|\mathbf{A}\|_{\infty} \leq 1$). We present a simple sublinear time algorithm that approximates all eigenvalues of $\mathbf{A}$ up to additive error $\pm \epsilon n$ using those of a randomly sampled ${O}\left (\frac{\log^3 n}{\epsilon^3}\right ) \times O\left (\frac{\log^3 n}{\epsilon^3}\right )$ principal submatrix. Our result can be viewed as a concentration bound on the \textit{full} eigenspectrum of a random submatrix, significantly extending known bounds on just the top eigenvalue (the spectral norm). When $\mathbf{A}$ is sparse and rows of $\mathbf{A}$ can be efficiently sampled with probabilities proportional to their sparsity, we present an improved error bound of $\pm \epsilon \sqrt{\text{nnz}(\mathbf{A})}$, where $\text{nnz}(\mathbf{A})$ is the number of non-zero entries in $\mathbf{A}$. Even for the strictly easier problem of testing the existence of large negative eigenvalues, introduced by Bakshi, Chepurko, and Jayaram (FOCS '20), our results are the first ones that can take advantage of the sparsity of $\mathbf{A}$. From a technical perspective, our bounds require several new eigenvalue concentration and perturbation bounds for matrices with bounded entries. We complement our theoretical results with numerical simulations, which demonstrate the effectiveness of our algorithms in practice.
  </details>

- [Sublinear Time Approximation of Text Similarity Matrices](https://arxiv.org/abs/2112.09631)
  <br>
  Archan Ray, Nicholas Monath, Andrew McCallum, and Cameron Musco
  <br>
  AAAI Conference on Artificial Intelligence (AAAI) 2022. <br>
  <details><summary> Abstract | <a href="https://github.com/archanray/approximate_similarities"> Code </a></summary>
  We study algorithms for approximating pairwise similarity matrices that arise in natural language processing. Generally, computing a similarity matrix for $n$ data points requires $\Omega(n^2)$ similarity computations.
This quadratic scaling is a significant bottleneck, especially when similarities are computed via expensive functions, e.g., via transformer models.  Approximation methods reduce this quadratic complexity, often by using a small subset of exactly computed similarities to approximate the remainder of the complete pairwise similarity matrix.<br>


  Significant  work focuses on the efficient approximation of positive semidefinite (PSD) similarity matrices, which arise e.g., in kernel methods. However, much less is understood about indefinite (non-PSD) similarity matrices, which often  arise in  NLP. Motivated by the observation that many of these matrices are still somewhat close to PSD, we introduce a generalization of the popular <i>Nystrom method</i> to the indefinite setting. Our algorithm can be applied to any similarity matrix and runs in sublinear time in the size of the matrix, producing a rank-$s$ approximation with just $O(ns)$ similarity computations.

  We show that our method, along with a simple variant of CUR decomposition, performs very well in approximating a variety of similarity matrices arising in NLP tasks. We demonstrate high accuracy of the approximated similarity matrices in the downstream tasks of document classification, sentence similarity, and cross-document coreference.
  </details>

- [Tight Coupling of Character, Word, and Place Recognition for End-to-End Text Recognition in Maps](https://web.cs.umass.edu/publication/docs/2019/UM-CS-2019-003.pdf)
  <br>
  Archan Ray, Aruni Roy Chowdhury, Yi Fung, Jerod Weinman, and Erik Learned-Miller
  <br>
  Technical Report, College of Information and Computer Sciences, University of Massachusetts, Amherst, MA, 2019.<br>
  <details><summary> Abstract </summary>
  Text recognition in maps is a special case of general text recognition that features some especially difficult challenges, including texts at extreme orientations, wide character spacings, complex text-like distractors, and unusual non-dictionary strings. Off-the-shelf OCR systems, and even sophisticated scene text recognition systems do not work satisfactorily on many map-text recognition problems. While many OCR and scene text systems have produced high quality results by considering detection, recognition, and error-correction as separate components, we believe that map text recognition can benefit immensely from the <b>tight coupling</b> of different components of an overall system. In particular, we present an end-to-end system for recognizing text in maps that uses strong coupling in two different ways. In the first, we train individual <b>character</b> detectors, and use these detections as inputs in a new <b>word detection CNN architecture</b> to improve word detection. We show dramatic increases in word detection accuracy for a strong baseline detection architecture. In the second contribution, we use a geographically-based lexicon to constrain our interpretations of initial detections. If the lexicon suggests that the word detection is either too short, we ""re-prime'' the word detector by inserting expected characters locations back into the word detector using a novel input mechanism. We then rerun the word detector using the additional character suggestions, giving a solid improvement in accuracy. We report end-to-end recognition results on a public map-text recognition benchmark.
  </details>

- [Historical map annotations for text detection and recognition](https://weinman.cs.grinnell.edu/~weinman/data/complete-map-dataset.pdf)
  <br>
  Archan Ray, Ziwen Chen, Ben Gafford, Nathan Gifford, Jagath Jai Kumar, Abyaya Lamsal, Liam Niehus-Staab, Jerod Weinman, and Erik Learned-Miller
  <br>
  Grinnell College, Technical Report, 2018.
  <details><summary> Introduction </summary>
  This document describes a data set designed for testing the performance of text/graphics separation and
character recognition algorithms on text in scanned historical map images. Thirty one maps from the
nineteenth and early twentieth centuries (1866-1927) were chosen from nine atlases in the David Rumsey
Map Collection. Most maps are of individual states, though some are regional and one is of the entire
U.S.; many are engraved with occasional handwritten text. The original MrSid files are converted into
uncompressed TIFF images. The images and annotations are available from the following URLs.
  </details>

- [U-PC: Unsupervised planogram compliance](http://openaccess.thecvf.com/content_ECCV_2018/papers/Archan_Ray_U-PC_Unsupervised_Planogram_ECCV_2018_paper.pdf)
  <br>
  Archan Ray, Nishant Kumar, Avishek Shaw, and Dipti Prasad Mukherjee
  <br>
  European Conference on Computer Vision (ECCV), 2018.<br>
  <details><summary> Abstract </summary>
  We present an end-to-end solution for recognizing merchandise displayed in the shelves of a supermarket. Given images of individual products, which are taken under ideal illumination for product marketing, the challenge is to find these products automatically in the images of the shelves. Note that the images of shelves are taken using hand-held camera under store level illumination. We provide a two-layer hypotheses generation and verification model. In the first layer, the model predicts a set of candidate merchandise at a specific location of the shelf while in the second layer, the hypothesis is verified by a novel graph theoretic approach. The performance of the proposed approach on two publicly available datasets is better than the competing approaches by at least 10%.
  </details>

### Theses/Dissertations

- [Sublinear Algorithms for Matrices: Theory and Applications](https://scholarworks.umass.edu/server/api/core/bitstreams/40f82c07-9d5e-4560-b601-5ec3a59794d4/content)
  <br>
  Archan Ray
  <br>
  Ph.D. Dissertation, UMass Amherst, 2024. <br>
  <details><summary> Abstract </summary>
  Matrices are ubiquitous mathematical structures that arise throughout computer science. We study fast algorithms for several central problems involving matrices, including eigenvalue approximation, spectral approximation, and low-rank approximation. In particular, we focus on \textit{sublinear time} or \textit{sublinear query} algorithms that can scale to very large matrices. We focus on developing algorithms with theoretical bounds and demonstrate the applicability of these algorithms on real-world datasets. 
    
  We first present a simple randomized algorithm for approximating \textit{all} the eigenvalues of a bounded-entry matrix to a small additive error by querying a small random submatrix of the input matrix. Next, we give the first sublinear query deterministic algorithms that can approximate any symmetric matrix $\mathbf{A}$ in the spectral norm -- i.e., that output $\tilde{\mathbf{A}}$ where $\|\mathbf{A}-\tilde{\mathbf{A}}\|_2$ is bounded. Using this result, we give the first deterministic algorithm that can approximate all the singular values of any symmetric matrix to small additive error in faster than matrix multiplication time. We further extend the above results by improving the query complexity in the case when $\mathbf{A}$ is positive semidefinite (PSD) with entries in $\{-1,0,1\}$.

  Then we empirically analyze eigenvalue approximation of symmetric matrices using various matrix-vector query algorithms. We explore the trade-offs between adaptivity and query complexity of such algorithms. This study complements our work on algorithms that read a sublinear number of entries of the input matrix. Finally, we present a generalization of the Nystr\"{o}m method for low-rank approximations of general symmetric matrices. We conduct a comparative study of this generalized Nystr\"{o}m method and other sublinear algorithms for computing low-rank approximations of similarity matrices arising in natural language processing (NLP) tasks.
  </details>

- [Estimation of image features representing facial emotions for emotion synthesis](http://library.isical.ac.in:8080/jspui/bitstream/10263/6487/1/DISS-330.pdf)
  <br>
  Archan Ray
  <br>
  M. Tech Dissertation Series, Indian Statistical Institute, Kolkata, 2015.<br>
  <details><summary> Abstract </summary>
  We develop a method to estimate emotion-specific features on human face. Application of such a method include characterizing an emotion class and synthesis of emotions. The emotion specific features can also be used to study the statistical differences between two clusters, one facial expression images with no expressions and two facial expression images with some or maximum emotional content. Once the feature vectors are extracted from the input data, we classify the data and use the normal to the classifier to trace the changes that a facial expression image may undergo in different stages of an emotion. We use Support Vector Machines learning algorithm to construct an optimal classifier. In the result section we show that we are able to reduce the number of features by 66.36% as compared to the total number of pixels. We show that using these features and state-of-the-art methods to synthesize images, we improved SNR of the synthesized image by 13.20% and also improved the cluster measures between a cluster of no-expression images and a cluster of with-expression images.
  </details>

### Patents

* [System and method for object recognition based estimation of planogram compliance](https://patentimages.storage.googleapis.com/73/44/a8/3bfb3d247b7fc8/US10748030.pdf)\
Pranoy Hari, Shilpa Yadukumar Rao, Rajashree Ramakrishnan, Avishek Kumar Shaw, Archan Ray, Nishant Kumar, and Dipti Prasad Mukherjee\
U.S. Patent 10,748,030, 2020.
