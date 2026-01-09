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
    topics: ["Matrix Equations", "Spring-Mass Systems", "Stiffness Matrix", "Force Distribution", "Truss Analysis"],
    content: {
      overview: "This chapter establishes the critical foundation for understanding why engineers prefer matrix methods over solving individual equations. Linear algebra provides powerful tools for analyzing complex systems efficiently.",
      keyPoints: [
        "Why engineers stack all equations into a single matrix equation Ax = b",
        "How linearity (doubling load doubles response) simplifies engineering analysis",
        "Physical meaning of singular matrices in trusses, springs, and fluid networks",
        "Understanding stiffness matrices and force vectors in mechanical systems"
      ],
      applications: [
        {
          title: "Spring-Mass Systems",
          description: "Two blocks connected by springs with stiffness k₁ and k₂. Given external forces, determine displacements using the stiffness matrix K and solve Kx = F.",
          formula: "K = [k₁+k₂, -k₂; -k₂, k₂+k₃]"
        },
        {
          title: "Truss Analysis", 
          description: "Triangular truss with members AB, AC, BC under applied loads. Use equilibrium equations ΣFx = 0, ΣFy = 0 at each joint to find member forces.",
          formula: "Static Equilibrium: ΣF = 0, ΣM = 0"
        },
        {
          title: "Beam Reactions",
          description: "Simply supported beam with point loads. Determine support reactions RA and RB using moment equilibrium.",
          formula: "[1, 1; a, b][RA; RB] = [P; M]"
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
    topics: ["Row Operations", "Forward Elimination", "Back Substitution", "LU Factorization", "Pivoting"],
    content: {
      overview: "These numerical methods form the backbone of computational linear algebra. Gauss elimination transforms systems into triangular form, while LU decomposition factors matrices for efficient repeated solutions.",
      keyPoints: [
        "Systematic row reduction to upper triangular form",
        "Back substitution for finding solution vector",
        "LU Decomposition: A = LU where L is lower and U is upper triangular",
        "Computational efficiency: O(n³) for general systems"
      ],
      applications: [
        {
          title: "Spring System Analysis",
          description: "Four-mass system with springs k₁=100, k₂=200, k₃=300, k₄=500, k₅=400, k₆=150 N/m. Forces F₁=20, F₂=10, F₃=30, F₄=30 kN applied. Find displacements u₁, u₂, u₃, u₄.",
          formula: "Gauss: [750,-200,-150,0; -200,600,-300,-100; -150,-300,950,-500; 0,-100,-500,600]"
        },
        {
          title: "LU Decomposition Method",
          description: "Solve x₁-3x₂+x₃=-5, 2x₁-2x₂+4x₃=0, 3x₁+2x₂+5x₃=7 by factoring coefficient matrix into L and U.",
          formula: "A = LU, then Ly = b, Ux = y"
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
    topics: ["Vector Spaces", "Linear Combinations", "Span", "Basis Vectors", "Dimension"],
    content: {
      overview: "Understanding linear independence is crucial for determining whether engineering systems have unique solutions and for reducing redundant measurements in sensor networks.",
      keyPoints: [
        "Vectors are linearly independent if no vector is a linear combination of others",
        "Span of vectors: all possible linear combinations",
        "Basis: minimal spanning set that is linearly independent",
        "Dimension equals the number of vectors in any basis"
      ],
      applications: [
        {
          title: "Structural Analysis",
          description: "Determining if force members in a truss are independent or if some are redundant for stability analysis.",
          formula: "det(A) ≠ 0 ⟹ Independent columns"
        },
        {
          title: "Sensor Fusion",
          description: "Multiple sensors measuring the same phenomenon - identifying which measurements provide independent information.",
          formula: "rank(A) = number of independent measurements"
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
    topics: ["Dot Product", "Projections", "Orthogonal Vectors", "Least Squares", "QR Factorization"],
    content: {
      overview: "Orthogonality provides elegant solutions to approximation problems. When exact solutions don't exist, least squares finds the best fit by minimizing the squared error.",
      keyPoints: [
        "Dot product: u·v = |u||v|cos(θ) measures alignment",
        "Projection of b onto a: proj_a(b) = (a·b/a·a)a",
        "Least squares solution: x̂ = (AᵀA)⁻¹Aᵀb",
        "QR factorization for numerical stability"
      ],
      applications: [
        {
          title: "Force Projection",
          description: "Force F=(10,5)N acts on block on ramp r=(3,4). Find component of F along ramp direction.",
          formula: "proj_r(F) = (F·r/|r|²)r"
        },
        {
          title: "Beam Deflection Fitting",
          description: "Measured deflections at x=0,1,2,3,4m are y=5.20,4.10,3.35,2.35,1.90mm. Fit line y=mx+c using least squares.",
          formula: "AᵀAx̂ = Aᵀb (Normal Equations)"
        },
        {
          title: "Sensor Calibration",
          description: "Temperature sensor readings vs true values. Fit calibration curve T_true = ax + b using least squares.",
          formula: "Minimize ||Ax - b||²"
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
    topics: ["Eigenvalues", "Eigenvectors", "Diagonalization", "Modal Analysis", "Natural Frequencies"],
    content: {
      overview: "Eigenvalue problems are fundamental to vibration analysis, stability studies, and understanding how mechanical systems respond to dynamic loads. Mode shapes reveal how structures naturally want to move.",
      keyPoints: [
        "Eigenvalue equation: Av = λv",
        "Characteristic polynomial: det(A - λI) = 0",
        "Mode shapes represent natural vibration patterns",
        "In-phase vs out-of-phase motion of coupled masses"
      ],
      applications: [
        {
          title: "Two-Mass Spring System",
          description: "System with matrix A=[-3,1;1,-3]. Find eigenvalues, eigenvectors, and identify in-phase/out-of-phase modes.",
          formula: "det(A - λI) = 0 → λ₁, λ₂"
        },
        {
          title: "Robotic Arm Vibration",
          description: "2-segment arm with stiffness K=[3,1;1,3]. Find natural frequencies and mode shapes describing joint bending.",
          formula: "Kφ = ω²Mφ (Generalized eigenvalue)"
        },
        {
          title: "Building Vibration",
          description: "Two-story shear building with M=1000kg per floor, k=20000N/m per story. Find natural frequencies and mode shapes.",
          formula: "|K - ω²M| = 0"
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
