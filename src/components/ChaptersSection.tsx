import { useState } from "react";
import ChapterCard from "./ChapterCard";
import ChapterContent from "./ChapterContent";

const chapters = [
  {
    number: 1,
    title: "Why Linear Algebra for Engineers?",
    description: "Understanding the fundamental role of linear algebra in engineering systems and why matrix methods are essential for solving real-world problems.",
    hours: 5,
    colorClass: "bg-[hsl(200,70%,45%)]",
    topics: ["Matrix Equations", "Spring-Mass Systems", "Stiffness Matrix", "Force Distribution", "Truss Analysis", "Beam Analysis", "Static Equilibrium"],
    content: {
      overview: `This foundational chapter establishes why engineers prefer matrix methods over solving individual equations. Linear algebra provides powerful, systematic tools for analyzing complex interconnected systems efficiently.

In mechanical engineering, virtually every physical system—whether it's a network of springs, a structural truss, or a robotic arm—can be described by a system of linear equations. Rather than solving each equation separately, engineers stack all equations into a single matrix equation Ax = b, enabling systematic solution methods and computer implementation.

The key insight is LINEARITY: if you double the applied load, the response (displacement, stress, current) also doubles. This proportional relationship is what makes linear algebra so powerful for engineering analysis. Systems exhibiting this property can be superposed, meaning individual solutions can be added together to find the total response.`,
      keyPoints: [
        "Matrix equation Ax = b unifies all equilibrium equations into a single solvable system",
        "Linearity principle: doubling load doubles response, enabling superposition of solutions",
        "Stiffness matrix K relates forces F to displacements x through Kx = F",
        "Singular matrices indicate mechanisms (zero stiffness in some direction) or redundancy",
        "Physical interpretation: each matrix row represents equilibrium at one node/joint",
        "Column space of A represents all achievable force/response combinations",
        "Null space of K reveals rigid body modes (motion without resistance)"
      ],
      applications: [
        {
          title: "Spring-Mass Systems",
          description: "Consider two masses m₁ and m₂ connected by springs with stiffnesses k₁, k₂, and k₃. When external forces F₁ and F₂ are applied, the equilibrium requires that the net force on each mass equals zero. This leads to the stiffness matrix equation Kx = F. The stiffness matrix K is symmetric (Kᵢⱼ = Kⱼᵢ) because the force on mass i due to displacement of mass j equals the force on mass j due to displacement of mass i (Newton's third law). The diagonal entries represent the total stiffness at each node, while off-diagonal entries (always negative) represent coupling between nodes.",
          formula: "K = [k₁+k₂, -k₂; -k₂, k₂+k₃], where Kx = F gives displacements x₁, x₂"
        },
        {
          title: "Truss Analysis",
          description: "A triangular truss with members AB, AC, BC carries applied loads at joint A. Using the method of joints, we apply equilibrium equations ΣFx = 0 and ΣFy = 0 at each joint. This creates a system of 2n equations for n joints. Unknown member forces appear as coefficients multiplied by direction cosines. The resulting matrix equation relates member forces to applied loads. Positive values indicate tension, negative values indicate compression. If det(A) = 0, the truss is a mechanism.",
          formula: "At each joint: ΣFₓ = 0, ΣFᵧ = 0 → [cosθᵢⱼ]{Fᵢⱼ} = {Pₓ, Pᵧ}"
        },
        {
          title: "Beam Reactions",
          description: "A simply supported beam of length L carries point loads P₁ at distance a₁ and P₂ at distance a₂ from support A. Using moment equilibrium about each support and vertical force equilibrium, we obtain two equations in two unknowns (reactions Rₐ and Rᵦ). The coefficient matrix captures the geometry while the right-hand side contains the applied loads and their moment arms.",
          formula: "[1, 1; 0, L][Rₐ; Rᵦ] = [P₁+P₂; P₁a₁+P₂a₂]"
        },
        {
          title: "Fluid Network Analysis",
          description: "In a pipe network, conservation of mass at each junction (inflow = outflow) combined with pressure-drop relations along each pipe creates a linear system. The matrix A captures network topology (which pipes connect to which junctions), and solving Ax = b gives flow rates in each pipe.",
          formula: "Continuity: ΣQᵢₙ = ΣQₒᵤₜ at each node"
        }
      ]
    }
  },
  {
    number: 2,
    title: "Gauss Elimination & LU Decomposition",
    description: "Master the fundamental algorithms for solving systems of linear equations efficiently, including row reduction and matrix factorization techniques.",
    hours: 7,
    colorClass: "bg-[hsl(160,60%,40%)]",
    topics: ["Row Operations", "Forward Elimination", "Back Substitution", "LU Factorization", "Pivoting", "Computational Complexity", "Numerical Stability"],
    content: {
      overview: `Gauss Elimination and LU Decomposition form the backbone of computational linear algebra. These methods provide systematic, algorithmic approaches to solving Ax = b that can be efficiently implemented on computers.

GAUSS ELIMINATION works by using elementary row operations to transform the augmented matrix [A|b] into upper triangular form [U|c]. The three allowed row operations are: (1) swap two rows, (2) multiply a row by a nonzero constant, (3) add a multiple of one row to another. Once in upper triangular form, back substitution finds the solution starting from the last equation.

LU DECOMPOSITION factors A into the product of a lower triangular matrix L and an upper triangular matrix U, so A = LU. This is particularly efficient when solving multiple systems with the same coefficient matrix A but different right-hand sides b. Instead of repeating elimination each time, we solve Ly = b (forward substitution) and then Ux = y (back substitution).

The computational complexity is O(n³) for the factorization and O(n²) for each subsequent solve—a significant advantage when the same system is solved repeatedly with different loads.`,
      keyPoints: [
        "Forward elimination creates zeros below each pivot, producing upper triangular U",
        "Multipliers used in elimination form the lower triangular matrix L",
        "A = LU means elimination is 'recorded' in L for reuse with different b vectors",
        "Partial pivoting (swapping rows) improves numerical stability for ill-conditioned systems",
        "Computational cost: O(n³/3) multiplications for n×n system",
        "LU factorization computed once; each new right-hand side costs only O(n²)",
        "Singular matrices detected when a pivot becomes zero (no swap available)"
      ],
      applications: [
        {
          title: "Four-Mass Spring System",
          description: "Consider a system with four masses connected by six springs: k₁=100, k₂=200, k₃=300, k₄=500, k₅=400, k₆=150 N/m. Applied forces are F₁=20, F₂=10, F₃=30, F₄=30 kN. The stiffness matrix K is 4×4, assembled by considering spring connections. Gauss elimination systematically eliminates unknowns: first eliminate u₁ from equations 2,3,4; then eliminate u₂ from equations 3,4; then eliminate u₃ from equation 4. Back substitution gives u₄, then u₃, then u₂, then u₁.",
          formula: "K = [750,-200,-150,0; -200,600,-300,-100; -150,-300,950,-500; 0,-100,-500,600] N/m"
        },
        {
          title: "LU Decomposition Method",
          description: "Solve the system: x₁-3x₂+x₃=-5, 2x₁-2x₂+4x₃=0, 3x₁+2x₂+5x₃=7. First, factor A into LU by performing elimination and recording multipliers. L has 1s on diagonal with multipliers below; U is the final upper triangular form. Then solve Ly=b by forward substitution to get intermediate vector y. Finally solve Ux=y by back substitution to get solution x.",
          formula: "A = LU where L = [1,0,0; 2,1,0; 3,2,1], U = [1,-3,1; 0,4,2; 0,0,2]"
        },
        {
          title: "Truss Force Analysis",
          description: "A planar truss with 5 joints and 8 members under multiple load cases. Using LU decomposition, we factor the equilibrium matrix once. For each load case (dead load, live load, wind load), we only need forward and back substitution to find member forces—much faster than repeating full elimination.",
          formula: "LU factored once; solve for each load case: Ly⁽ⁱ⁾=b⁽ⁱ⁾, Ux⁽ⁱ⁾=y⁽ⁱ⁾"
        }
      ]
    }
  },
  {
    number: 3,
    title: "Linear Independence & Basis",
    description: "Explore vector spaces, linear combinations, and the geometric interpretation of independence, span, and basis in engineering contexts.",
    hours: 6,
    colorClass: "bg-[hsl(35,80%,50%)]",
    topics: ["Vector Spaces", "Linear Combinations", "Span", "Basis Vectors", "Dimension", "Rank", "Null Space"],
    content: {
      overview: `Linear independence is a fundamental concept that determines whether a system of equations has a unique solution, infinitely many solutions, or no solution at all. Understanding this concept is crucial for engineering system analysis.

VECTORS ARE LINEARLY INDEPENDENT if no vector in the set can be written as a linear combination of the others. Equivalently, the only solution to c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is c₁ = c₂ = ... = cₙ = 0. If a nontrivial combination equals zero, the vectors are linearly dependent.

THE SPAN of a set of vectors is the collection of all possible linear combinations. If vectors v₁, v₂, ..., vₖ span Rⁿ, then any vector in Rⁿ can be expressed as their combination.

A BASIS is a set of vectors that is both linearly independent AND spans the space. The number of vectors in a basis is the DIMENSION of the space. For Rⁿ, any basis has exactly n vectors.

RANK of a matrix is the number of linearly independent columns (or equivalently, rows). A system Ax = b has a unique solution if and only if rank(A) = n (full column rank).`,
      keyPoints: [
        "Linear independence: no vector is a combination of others",
        "Test: if det(A) ≠ 0, columns are independent; if det(A) = 0, dependent",
        "Span = all reachable points via linear combinations",
        "Basis = minimal independent spanning set",
        "Dimension = number of vectors in any basis",
        "Rank = number of independent columns = number of pivots in row echelon form",
        "Null space = all vectors x satisfying Ax = 0 (represents 'hidden' degrees of freedom)"
      ],
      applications: [
        {
          title: "Structural Redundancy Analysis",
          description: "In a statically indeterminate truss, some members are redundant—removing them does not cause collapse. The equilibrium matrix A has more columns (members) than independent equations. The null space of A reveals which combinations of member forces produce zero net force at joints. These represent self-equilibrating internal stress states.",
          formula: "rank(A) < m (members) implies (m - rank) redundant members"
        },
        {
          title: "Sensor Array Independence",
          description: "An array of n sensors measures a physical quantity (temperature, strain, vibration). If sensor outputs are linearly dependent, some sensors provide no new information. The rank of the measurement matrix tells us how many independent measurements we actually have. Dependent sensors can be removed or repositioned for efficiency.",
          formula: "rank(Measurement Matrix) = effective independent sensors"
        },
        {
          title: "Mechanism Detection",
          description: "A mechanism is a structure that can move without resistance. Mathematically, the stiffness matrix K has a null space—there exist nonzero displacements x with Kx = 0 (zero force required). Each independent vector in null(K) represents one degree of freedom of the mechanism. A properly constrained structure has null(K) = {0}.",
          formula: "dim(null(K)) = number of mechanism degrees of freedom"
        },
        {
          title: "Coordinate System Selection",
          description: "For 3D analysis, we need three linearly independent vectors to form a basis. Any force or displacement can then be uniquely expressed as components along these basis directions. Orthogonal bases (mutually perpendicular) simplify calculations because projections are easy to compute.",
          formula: "Any v ∈ R³: v = c₁e₁ + c₂e₂ + c₃e₃ (unique representation)"
        }
      ]
    }
  },
  {
    number: 4,
    title: "Orthogonality & Least Squares",
    description: "Learn projection methods, orthogonal decomposition, and least squares fitting for data analysis and signal processing applications.",
    hours: 6,
    colorClass: "bg-[hsl(280,50%,50%)]",
    topics: ["Dot Product", "Projections", "Orthogonal Vectors", "Gram-Schmidt", "Least Squares", "QR Factorization", "Normal Equations"],
    content: {
      overview: `Orthogonality provides elegant solutions to approximation problems. When an exact solution to Ax = b does not exist (overdetermined system with more equations than unknowns), least squares finds the best approximate solution by minimizing the sum of squared errors.

THE DOT PRODUCT (inner product) u·v = u₁v₁ + u₂v₂ + ... + uₙvₙ measures how aligned two vectors are. If u·v = 0, the vectors are orthogonal (perpendicular). The magnitude |v| = √(v·v).

PROJECTION of vector b onto vector a gives the component of b in the direction of a: proj_a(b) = (a·b/a·a)a. The residual b - proj_a(b) is orthogonal to a.

LEAST SQUARES minimizes ||Ax - b||². The solution x̂ satisfies the NORMAL EQUATIONS: AᵀAx̂ = Aᵀb. Geometrically, Ax̂ is the projection of b onto the column space of A, and the residual b - Ax̂ is orthogonal to that column space.

GRAM-SCHMIDT PROCESS converts any independent set into an orthogonal (or orthonormal) set, which simplifies many calculations. QR FACTORIZATION writes A = QR where Q has orthonormal columns and R is upper triangular.`,
      keyPoints: [
        "Dot product: u·v = |u||v|cos(θ) measures alignment; u·v = 0 means perpendicular",
        "Projection of b onto a: proj_a(b) = (a·b/|a|²)a",
        "Least squares minimizes ||Ax - b||² (sum of squared residuals)",
        "Normal equations: AᵀAx̂ = Aᵀb gives the optimal x̂",
        "Geometric interpretation: Ax̂ is closest point to b in column space of A",
        "Gram-Schmidt creates orthonormal basis from independent vectors",
        "QR factorization: numerically stable alternative to normal equations"
      ],
      applications: [
        {
          title: "Force Component Along Ramp",
          description: "A force F = (10, 5) N acts on a block resting on a ramp with direction vector r = (3, 4). The component of F along the ramp (causing sliding) is the projection of F onto r. The component perpendicular to ramp (normal force) is F minus this projection. These components determine whether the block slides (if tangential component exceeds friction) and the normal force for friction calculation.",
          formula: "F_parallel = proj_r(F) = (F·r/|r|²)r = (50/25)(3,4) = (6, 8) N"
        },
        {
          title: "Beam Deflection Curve Fitting",
          description: "Deflection measurements at positions x = 0, 1, 2, 3, 4 m are y = 5.20, 4.10, 3.35, 2.35, 1.90 mm. We want to fit a linear model y = mx + c. With 5 data points and 2 unknowns, the system is overdetermined. Setting up A = [x, 1] and b = y, the least squares solution minimizes the sum of squared deviations between measured and predicted values. The normal equations give optimal slope m and intercept c.",
          formula: "A = [0,1; 1,1; 2,1; 3,1; 4,1], b = [5.20; 4.10; 3.35; 2.35; 1.90], solve AᵀAx̂ = Aᵀb"
        },
        {
          title: "Polynomial Regression",
          description: "Fitting a quadratic y = ax² + bx + c to n data points. The design matrix A has columns [x², x, 1]. Even though exact interpolation through all points is generally impossible with only 3 parameters, least squares finds the best parabola that minimizes total squared error. This generalizes to any polynomial degree.",
          formula: "A = [x₁², x₁, 1; x₂², x₂, 1; ...], minimize ||Ax - y||²"
        },
        {
          title: "Vibration Signal Analysis",
          description: "A vibration signal is measured at discrete times. We want to fit a sum of sinusoids: y(t) = A₁sin(ω₁t) + A₂cos(ω₁t) + A₃sin(ω₂t) + ... This is linear in the unknown amplitudes Aᵢ. Least squares finds the amplitudes that best match the measured signal, revealing which frequencies are present and their strengths.",
          formula: "Design matrix: columns are sin(ωᵢtⱼ), cos(ωᵢtⱼ) evaluated at measurement times"
        }
      ]
    }
  },
  {
    number: 5,
    title: "Eigenvalues, Eigenvectors & Dynamics",
    description: "Discover how eigenvalue analysis reveals natural frequencies, mode shapes, and stability characteristics of dynamic mechanical systems.",
    hours: 7,
    colorClass: "bg-[hsl(350,65%,55%)]",
    topics: ["Eigenvalues", "Eigenvectors", "Characteristic Polynomial", "Diagonalization", "Modal Analysis", "Natural Frequencies", "Mode Shapes"],
    content: {
      overview: `Eigenvalue analysis is fundamental to understanding how mechanical systems vibrate, how structures respond to dynamic loads, and whether systems are stable or unstable. Every vibrating system has natural frequencies and corresponding mode shapes that emerge directly from eigenvalue problems.

THE EIGENVALUE EQUATION Av = λv asks: for which special vectors v does matrix multiplication by A simply scale v without changing its direction? Such vectors v are EIGENVECTORS, and the scaling factors λ are EIGENVALUES.

To find eigenvalues, solve det(A - λI) = 0, the CHARACTERISTIC EQUATION. This is a polynomial of degree n with n roots (counting multiplicity). For each eigenvalue λ, solve (A - λI)v = 0 to find the corresponding eigenvector(s).

IN VIBRATION ANALYSIS, the equation of motion Mẍ + Kx = 0 (mass times acceleration plus stiffness times displacement equals zero) leads to the generalized eigenvalue problem Kφ = ω²Mφ. Here ω² are eigenvalues (squared natural frequencies) and φ are mode shapes. Larger eigenvalues correspond to higher frequencies (faster vibration), and mode shapes describe the pattern of motion.

MODE SHAPES have physical meaning: in a two-mass system, one mode might be "in-phase" (both masses moving together) and another "out-of-phase" (masses moving oppositely).`,
      keyPoints: [
        "Eigenvalue equation: Av = λv (A multiplies v, result is just λ times v)",
        "Characteristic polynomial: det(A - λI) = 0 gives eigenvalues",
        "Each eigenvalue has at least one eigenvector; geometric multiplicity ≤ algebraic",
        "Symmetric matrices (like stiffness K) have real eigenvalues and orthogonal eigenvectors",
        "Natural frequency ωᵢ = √λᵢ where λᵢ is eigenvalue of M⁻¹K",
        "Mode shapes φᵢ describe spatial pattern of vibration at frequency ωᵢ",
        "Diagonalization A = PDP⁻¹ decouples the system into independent single-DOF oscillators"
      ],
      applications: [
        {
          title: "Two-Mass Coupled Oscillator",
          description: "System with matrix A = [-3, 1; 1, -3] arising from two masses connected by springs. The characteristic equation det(A - λI) = (λ+3)² - 1 = 0 gives λ₁ = -2 and λ₂ = -4. For λ₁ = -2, eigenvector is [1, 1] (in-phase mode: both masses move together). For λ₂ = -4, eigenvector is [1, -1] (out-of-phase mode: masses move oppositely). The out-of-phase mode has higher frequency because it stretches the middle spring more.",
          formula: "det(A - λI) = 0 → λ² + 6λ + 8 = 0 → λ = -2, -4"
        },
        {
          title: "Robotic Arm Joint Vibration",
          description: "A 2-link robotic arm has joint stiffness matrix K = [3, 1; 1, 3] and mass matrix M = I (identity, for simplicity). The natural frequencies are ω = √λ where λ satisfies det(K - λI) = 0. Eigenvalues are λ₁ = 2 and λ₂ = 4, giving ω₁ = √2 and ω₂ = 2 rad/s. Mode shapes describe how the joints bend together or oppositely. Understanding these helps in trajectory planning to avoid exciting resonances.",
          formula: "Kφ = ω²Mφ → eigenvalues λ = 2, 4; ω₁ = 1.41, ω₂ = 2 rad/s"
        },
        {
          title: "Two-Story Building Vibration",
          description: "A shear building with two floors, each of mass m = 1000 kg, and story stiffness k = 20000 N/m. The mass matrix M is diagonal (lumped masses at each floor). The stiffness matrix K comes from shear deformation of each story. Solving |K - ω²M| = 0 gives natural frequencies. The first mode has both floors moving in the same direction (lower frequency); the second mode has floors moving in opposite directions (higher frequency). Earthquake-resistant design avoids matching ground motion frequencies to building natural frequencies.",
          formula: "K = k[2,-1;-1,1], M = m·I; solve det(K - ω²M) = 0"
        },
        {
          title: "Rotating Shaft Critical Speed",
          description: "A rotating shaft carrying disks becomes dynamically unstable at certain speeds (critical speeds) where the rotation frequency matches a natural frequency. The eigenvalue problem for the shaft-disk system gives these critical speeds. Operating between critical speeds requires rapid acceleration through resonance zones to avoid dangerous vibration amplitudes.",
          formula: "Critical speed Ωcrit = √(k_eff/m_eff) from shaft-disk eigenanalysis"
        }
      ]
    }
  }
];

const ChaptersSection = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="chapters" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Chapters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five comprehensive chapters covering essential linear algebra concepts with engineering applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chapter Cards */}
          <div className="lg:col-span-1 space-y-4">
            {chapters.map((chapter, index) => (
              <ChapterCard
                key={chapter.number}
                {...chapter}
                isActive={activeChapter === index}
                onClick={() => setActiveChapter(index)}
              />
            ))}
          </div>

          {/* Chapter Content */}
          <div className="lg:col-span-2">
            <ChapterContent chapter={chapters[activeChapter]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
