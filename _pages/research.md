---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

### Research Interest

Broadly I am interested in developing computationally efficient algorithms. These methods have become extremely relevant in today's world of million sized datasets and massive parametrized learning models. More recently I have been working on *sublinear* algorithms for matrices, i.e., algorithms that run in time less than the number of inputs. Matrices are often used to represent data and parameters of learning models, and as such large datasets and complex learning models have lead to a requirement for efficient computational algorithms. The body of my work has been on pushing the boundaries of sublinear time or sublinear query algorithms in context of matrices and their applications. Applications include -- model compression, approximate learning functions, fast search and recommendation systems, near-optimal deep nets, and approximate feature embeddings.

Prior to this I have dabbled unsuccessfully in computer vision, where I was working on detecting and recognizing texts in maps. I also worked on image synthesis in the kernel induced space during my masters.

### Papers

(author ordering for the papers below is alphabetical if marked \*)
(equal contribution authors marked with \+)


<!-- - []()
  <br>
  <br>
  <details><summary> Abstract </summary>
  </details> -->
- [A simple analysis of a quantum-inspired algorithm for solving low-rank linear systems](https://arxiv.org/pdf/2508.13108)
  <br>
  Tyler Chen$^+$, Junhyung Lyle Kim$^+$, Archan Ray$^+$, Shouvanik Chakrabarti, Dylan Herman, Niraj Kumar
  <br>
  <details><summary> Abstract </summary>
  We describe and analyze a simple algorithm for sampling from the solution $x^* := A^+ b$ to a linear system $Ax=b$. We assume access to a sampler which allows us to draw indices proportional to the squared row/column-norms of $A$. Our algorithm produces a compressed representation of some vector $x$ for which $\|x^*−x\|< \epsilon\|x^*\|$ in $\tilde{O}(\kappa_F^4\kappa^2/\epsilon^2)$ time, where $\kappa_F := \|A\|_F\|A^+\|$ and $\kappa := \|A\|\|A^+\|$. The representation of $x$ allows us to query entries of $x$ in $\tilde{O}(\kappa_F^2)$ time and sample proportional to the square entries of $x$ in $\tilde{O}(\kappa_F^4\kappa^6)$ time, assuming access to a sampler which allows us to draw indices proportional to the squared entries of any given row of $A$. Our analysis, which is elementary, non-asymptotic, and fully self-contained, simplifies and clarifies several past analyses from literature including [Gilyén, Song, and Tang; 2022, 2023] and [Shao and Montanaro; 2022].
  </details>

- [MetaTT: A Global Tensor-Train Adapter for Parameter-Efficient Fine-Tuning](https://arxiv.org/pdf/2506.09105)
  <br>
  Javier Lopez-Piqueres, Pranav Deshpande, Archan Ray, Mattia J. Villani, Marco Pistoia, Niraj Kumar
  <br>
  <details><summary> Abstract </summary>
  We present MetaTT, a unified Tensor Train (TT) adapter framework for global low-rank fine-tuning of pre-trained transformers. Unlike LoRA, which fine-tunes each weight matrix independently, MetaTT uses a single shared TT to factorize all transformer sub-modules -- query, key, value, projection, and feed-forward layers -- by indexing the structural axes like layer and matrix type, and optionally heads and tasks. For a given rank, while LoRA adds parameters proportional to the product across modes, MetaTT only adds parameters proportional to the sum across modes leading to a significantly compressed final adapter. Our benchmarks compare MetaTT with LoRA along with recent state-of-the-art matrix and tensor decomposition based fine-tuning schemes. We observe that when tested on standard language modeling benchmarks, MetaTT leads to the most reduction in the parameters while maintaining similar accuracy to LoRA and even outperforming other tensor-based methods. Unlike CP or other rank-factorizations, the TT ansatz benefits from mature optimization routines -- e.g., DMRG-style rank adaptive minimization in addition to Adam, which we find simplifies training. Because new modes can be appended cheaply, MetaTT naturally extends to shared adapters across many tasks without redesigning the core tensor.
  </details>

- [Adaptive and Robust Watermark for Generative Tabular Data](https://arxiv.org/pdf/2409.14700)
  <br>
  Dung Daniel Ngo$^+$, Archan Ray$^+$, Akshay Seshadri$^+$, Daniel Scott, Saheed Obitayo, Niraj Kumar, Vamsi K. Potluru, Marco Pistoia, Manuela Veloso
  <br>
  <details><summary> Abstract </summary>
  In recent years, watermarking generative tabular data has become a prominent framework to protect against the misuse of synthetic data. However, while most prior work in watermarking methods for tabular data demonstrate a wide variety of desirable properties (e.g., high fidelity, detectability, robustness), the findings often emphasize empirical guarantees against common oblivious and adversarial attacks. In this paper, we study a flexible and robust watermarking algorithm for generative tabular data. Specifically, we demonstrate theoretical guarantees on the performance of the algorithm on metrics like fidelity, detectability, robustness, and hardness of decoding. The proof techniques introduced in this work may be of independent interest and may find applicability in other areas of machine learning. Finally, we validate our theoretical findings on synthetic and real-world tabular datasets.
  </details>


- [A Unified Framework for Provably Efficient Algorithms to Estimate Shapley Values](https://arxiv.org/pdf/2506.05216)
  <br>
  Tyler Chen$^+$, Akshay Seshadri$^+$, Mattia J. Villani$^+$, Pradeep Niroula, Shouvanik Chakrabarti, Archan Ray, Pranav Deshpande, Romina Yalovetzky, Marco Pistoia, Niraj Kumar
  <br>
  Annual Conference on Neural Information Processing Systems (Neurips) 2025 <br>
  <details><summary> Abstract </summary>
  Shapley values have emerged as a critical tool for explaining which features impact the decisions made by machine learning models. However, computing exact Shapley values is difficult, generally requiring an exponential (in the feature dimension) number of model evaluations. To address this, many model-agnostic randomized estimators have been developed, the most influential and widely used being the KernelSHAP method (Lundberg & Lee, 2017). While related estimators such as unbiased KernelSHAP (Covert & Lee, 2021) and LeverageSHAP (Musco & Witter, 2025) are known to satisfy theoretical guarantees, bounds for KernelSHAP have remained elusive. We describe a broad and unified framework that encompasses KernelSHAP and related estimators constructed using both with and without replacement sampling strategies. We then prove strong non-asymptotic theoretical guarantees that apply to all estimators from our framework. This provides, to the best of our knowledge, the first theoretical guarantees for KernelSHAP and sheds further light on tradeoffs between existing estimators. Through comprehensive benchmarking on small and medium dimensional datasets for Decision-Tree models, we validate our approach against exact Shapley values, consistently achieving low mean squared error with modest sample sizes. Furthermore, we make specific implementation improvements to enable scalability of our methods to high-dimensional datasets. Our methods, tested on datasets such MNIST and CIFAR10, provide consistently better results compared to the KernelSHAP library.
  </details>

- [GPU-Parallelizable Randomized Sketch-and-Precondition for Linear Regression using Sparse Sign Sketches\*](https://arxiv.org/pdf/2506.03070)
  <br>
  Tyler Chen, Pradeep Niroula, Archan Ray, Pragna Subrahmanya, Marco Pistoia, Niraj Kumar
  <br>
  <details><summary> Abstract </summary>
  A litany of theoretical and numerical results have established the sketch-and-precondition paradigm as a powerful approach to solving large linear regression problems in standard computing environments. Perhaps surprisingly, much less work has been done on understanding how sketch-and-precondition performs on graphics processing unit (GPU) systems. We address this gap by benchmarking an implementation of sketch-and-precondition based on sparse sign-sketches on single and multi-GPU systems. In doing so, we describe a novel, easily parallelized, rejection-sampling based method for generating sparse sign sketches. Our approach, which is particularly well-suited for GPUs, is easily adapted to a variety of computing environments. Taken as a whole, our numerical experiments indicate that sketch-and-precondition with sparse sign sketches is particularly well-suited for GPUs, and may be suitable for use in black-box least-squares solvers.
  </details>

- [Provably Faster Randomized and Quantum Algorithms for $k$-means Clustering via Uniform Sampling](https://arxiv.org/abs/2504.20982)
  <br>
  Tyler Chen$^+$, Archan Ray$^+$, Akshay Seshadri$^+$, Dylan Herman, Bao Bach, Pranav Deshpande, Abhishek Som, Niraj Kumar, Marco Pistoia
  <details><summary> Abstract </summary>
  The $k$-means algorithm (Lloyd's algorithm) is a widely used method for clustering unlabeled data. A key bottleneck of the $k$-means algorithm is that each iteration requires time linear in the number of data points, which can be expensive in big data applications. This was improved in recent works proposing quantum and quantum-inspired classical algorithms to approximate the $k$-means algorithm locally, in time depending only logarithmically on the number of data points (along with data dependent parameters) [q-means: A quantum algorithm for unsupervised machine learning; Kerenidis, Landman, Luongo, and Prakash, NeurIPS 2019; Do you know what $q$-means?, Doriguello, Luongo, Tang]. In this work, we describe a simple randomized mini-batch $k$-means algorithm and a quantum algorithm inspired by the classical algorithm. We prove worse-case guarantees that significantly improve upon the bounds for previous algorithms. Our improvements are due to a careful use of uniform sampling, which preserves certain symmetries of the $k$-means problem that are not preserved in previous algorithms that use data norm-based sampling.
  </details>

- [Improved Spectral Density Estimation via Explicit and Implicit Deflation\*](https://arxiv.org/abs/2410.21690)
  <br>
  Rajarshi Bhattacharjee, Rajesh Jayaram, Cameron Musco, Christopher Musco, Archan Ray
  <br>
  ACM-SIAM Symposium on Discrete Algorithms (SODA) 2025.
  <details><summary> Abstract | <a href="https://github.com/archanray/SDE_SLQ.git"> Code </a></summary>
  We study algorithms for approximating the spectral density (i.e., the eigenvalue distribution) of a symmetric matrix $\mathbf A \in \mathbb{R}^{n \times n}$ that is accessed through matrix-vector product queries. Recent work has analyzed popular Krylov subspace methods for this problem, showing that they output an $\epsilon \cdot \|\mathbf A\|_2$ error approximation to the spectral density in the Wasserstein-$1$ metric using $O(1/\epsilon)$ matrix-vector products. By combining a previously studied Chebyshev polynomial moment matching method with a <i>deflation</i> step that approximately projects off the largest magnitude eigendirections of $\mathbf A$ before estimating the spectral density, we give an improved error bound of $\epsilon \cdot \sigma_{\ell}(\mathbf A)$ using $O(\ell \log n+ 1/\epsilon)$ matrix-vector products, where $\sigma_\ell(\mathbf A)$ is the $\ell^{th}$ largest singular value of $\mathbf A$. In the common case when $\mathbf A$ exhibits fast singular value decay and so $\sigma_\ell(\mathbf A) \ll \|\mathbf A\|_2$, our bound can be much stronger than prior work. We also show that it is nearly tight: any algorithm giving error $\epsilon \cdot \sigma_\ell(\mathbf A)$ must use $\Omega(\ell+1/\epsilon)$ matrix-vector products. <br> 
    
  We further show that the popular Stochastic Lanczos Quadrature (SLQ) method essentially matches the above bound <i>for any choice of parameter</i> $\ell$, even though SLQ itself is parameter-free and performs no explicit deflation. Our bound helps to explain the strong practical performance and observed ``spectrum adaptive" nature of SLQ, and motivates a simple variant of the method that achieves an even tighter error bound. Technically, our results require a careful analysis of how eigenvalues and eigenvectors are approximated by (block) Krylov subspace methods, which may be of independent interest. Our error bound for SLQ leverages an analysis of the method that views it as an implicit polynomial moment matching method, along with recent results on low-rank approximation with single-vector Krylov methods. We use these results to show that the method can perform `implicit deflation' as part of moment matching.
  </details>

- [Universal Matrix Sparsifiers and Fast Deterministic Algorithms for Linear Algebra\*](https://arxiv.org/abs/2305.05826)
  <br>
  Rajarshi Bhattacharjee, Gregory Dexter, Cameron Musco, Archan Ray, Sushant Sachdeva, David P Woodruff
  <br>
  Innovations in Theoretical Computer Science (ITCS) 2024.<br>
  <details><summary> Abstract | <a href="https://www.youtube.com/watch?v=tvC38VBKLVY"> Video </a> from Rajarshi's talk at ITCS. </summary> 
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
