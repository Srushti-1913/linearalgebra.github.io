import { FlaskConical, FileCode, Download, CheckCircle, Calendar, User, FileText } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const labs = [
  {
    id: "lab1",
    number: 1,
    title: "Spring-Mass System Analysis",
    date: "October 2025",
    student: "Srushti G Joshi",
    srn: "01FE24BAR014",
    pdfUrl: "/labs/lab1-spring-mass.pdf",
    description: "Analyze a multi-spring system using stiffness matrix method and solve for nodal displacements.",
    problems: [
      {
        title: "Problem: 4-Spring System",
        details: "Springs with stiffness k₁=100, k₂=200, k₃=300, k₄=500, k₅=400, k₆=150 N/m. Forces F₁=20, F₂=10, F₃=30, F₄=30 kN.",
        solution: "u₁=0.225m, u₂=0.402m, u₃=0.455m, u₄=0.447m",
        method: "Construct global stiffness matrix K, then solve Ku = F using NumPy linear algebra"
      }
    ],
    code: `import numpy as np

# Spring stiffness values
k1, k2, k3, k4, k5, k6 = 100, 200, 300, 500, 400, 150

# Global stiffness matrix
K = np.array([
    [k2+k6+k5, -k2, -k6, 0],
    [-k2, k1+k2+k3, -k3, -k1],
    [-k6, -k3, k4+k6+k3, -k4],
    [0, -k1, -k4, k1+k4]
], dtype=float)

# External force vector
F = np.array([20, 10, 30, 30], dtype=float)

# Solve for displacements
x = np.linalg.solve(K, F)
print("Displacements:", x)`
  },
  {
    id: "lab2",
    number: 2,
    title: "Truss Member Force Analysis",
    date: "October 2025",
    student: "Srushti G Joshi",
    srn: "01FE24BAR014",
    pdfUrl: "/labs/lab2-truss-analysis.pdf",
    description: "Determine internal member forces in a triangular truss using static equilibrium equations and matrix methods.",
    problems: [
      {
        title: "Problem: Triangular Truss",
        details: "Joints A, B, C, D with 400N horizontal load at B and 500N vertical load at D. Member lengths 5m, 6m.",
        solution: "F_AB=20.83N, F_BC=38.0N, F_CD=367.5N",
        method: "Apply ΣFx=0, ΣFy=0 at each joint, form Ax=b system"
      }
    ],
    code: `import numpy as np

# Coefficient matrix from equilibrium equations
A = np.array([
    [1, 0.6, 0, 0, 0, 0, 0, 0],
    [0, 0.8, 0, 0, 0, 0, 0, 1],
    [-0.6, -1, 1, 0.6, 0, 0, 0, 0],
    [-0.8, 0, 0, 0.8, 0, 0, 0, 0],
    # ... additional rows
], dtype=float)

# Force vector
b = np.array([400, 0, 0, 0, 0, 500, 0, 0], dtype=float)

# Solve for member forces
forces = np.linalg.solve(A, b)
print("Member Forces:", forces)`
  },
  {
    id: "lab3",
    number: 3,
    title: "Gauss Elimination & LU Decomposition",
    date: "November 2025",
    student: "Srushti G Joshi",
    srn: "01FE24BAR014",
    pdfUrl: "/labs/lab3-gauss-lu.pdf",
    description: "Implement Gauss elimination with back substitution and LU decomposition for solving linear systems.",
    problems: [
      {
        title: "Problem 1: Spring Displacement (Gauss)",
        details: "750u₁-200u₂-150u₃=20, -200u₁+600u₂-300u₃-100u₄=10, etc.",
        solution: "u₁=0.225, u₂=0.4, u₃=0.45, u₄=0.49",
        method: "Forward elimination with row operations, then back substitution"
      },
      {
        title: "Problem 2: LU Decomposition",
        details: "x₁-3x₂+x₃=-5, 2x₁-2x₂+4x₃=0, 3x₁+2x₂+5x₃=7",
        solution: "Factor A=LU, solve Ly=b then Ux=y",
        method: "Doolittle algorithm for LU factorization"
      }
    ],
    code: `import numpy as np

def lu_decompose(A):
    n = len(A)
    L = np.eye(n)
    U = A.copy()
    
    for i in range(n):
        for j in range(i+1, n):
            L[j,i] = U[j,i] / U[i,i]
            U[j] = U[j] - L[j,i] * U[i]
    
    return L, U

# Example system
A = np.array([[1,-3,1], [2,-2,4], [3,2,5]], dtype=float)
b = np.array([-5, 0, 7], dtype=float)

L, U = lu_decompose(A)
y = np.linalg.solve(L, b)
x = np.linalg.solve(U, y)
print("Solution:", x)`
  },
  {
    id: "lab4",
    number: 4,
    title: "Robot Arm Kinematics",
    date: "December 2025",
    student: "Srushti G Joshi",
    srn: "01FE24BAR014",
    pdfUrl: "/labs/lab4-robot-kinematics.pdf",
    description: "Compute end-effector positions and workspace analysis for 2R and 3R planar robotic manipulators using homogeneous transformations.",
    problems: [
      {
        title: "Problem 1: 2R Robot",
        details: "L₁=5m, L₂=3m, θ₁=45°, θ₂=30°. Joint limits: θ₁∈[0°,180°], θ₂∈[-90°,90°]",
        solution: "End effector: x≈5.94m, y≈5.75m",
        method: "Forward kinematics with transformation matrices"
      },
      {
        title: "Problem 2: 3R Robot",
        details: "L₁=5m, L₂=3m, L₃=2m, θ₁=45°, θ₂=30°, θ₃=-30°",
        solution: "End effector: x≈4.74m, y≈5.51m",
        method: "Chain of homogeneous transformations"
      }
    ],
    code: `import numpy as np
import matplotlib.pyplot as plt

# Link lengths
L1, L2, L3 = 5, 3, 2

# Joint angles (radians)
theta1 = np.radians(45)
theta2 = np.radians(30)
theta3 = np.radians(-30)

# Forward kinematics - 3R Robot
x = L1*np.cos(theta1) + L2*np.cos(theta1+theta2) + L3*np.cos(theta1+theta2+theta3)
y = L1*np.sin(theta1) + L2*np.sin(theta1+theta2) + L3*np.sin(theta1+theta2+theta3)

print(f"End Effector Position: ({x:.2f}, {y:.2f}) m")

# Workspace plotting
theta1_range = np.linspace(0, np.pi, 30)
theta2_range = np.linspace(-np.pi/2, np.pi/2, 30)
theta3_range = np.linspace(-np.pi/2, np.pi/2, 30)

workspace_x, workspace_y = [], []
for t1 in theta1_range:
    for t2 in theta2_range:
        for t3 in theta3_range:
            x = L1*np.cos(t1) + L2*np.cos(t1+t2) + L3*np.cos(t1+t2+t3)
            y = L1*np.sin(t1) + L2*np.sin(t1+t2) + L3*np.sin(t1+t2+t3)
            workspace_x.append(x)
            workspace_y.append(y)

plt.scatter(workspace_x, workspace_y, s=1)
plt.title("3R Robot Workspace")
plt.show()`
  },
  {
    id: "lab-test",
    number: 5,
    title: "Static Equilibrium Test",
    date: "January 2026",
    student: "Srushti G Joshi",
    srn: "01FE24BAR014",
    pdfUrl: "/labs/lab5-static-equilibrium.pdf",
    description: "Comprehensive assessment on constructing stiffness matrices and solving for displacements in 4-mass spring systems.",
    problems: [
      {
        title: "4-Mass Spring System",
        details: "k₁=20, k₂=20, k₃=30, k₄=30 N/m. Forces: f₁=15N, f₂=0N, f₄=20N",
        solution: "x₁=1.75m, x₂=2.75m, x₃=3.47m, x₄=4.08m",
        method: "Construct 4×4 stiffness matrix, solve with NumPy"
      }
    ],
    code: `import numpy as np

# Spring stiffnesses
k1, k2, k3, k4 = 20, 20, 30, 30

# Global stiffness matrix (4x4)
K = np.array([
    [k1+k2, -k2, 0, 0],
    [-k2, k2+k3, -k3, 0],
    [0, -k3, k3+k4, -k4],
    [0, 0, -k4, k4]
], dtype=float)

# Force vector
F = np.array([15, 0, 0, 20], dtype=float)

# Solve for displacements
x = np.linalg.solve(K, F)
print("Displacements (m):", x)`
  }
];

const LabAssessments = () => {
  return (
    <section id="labs" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FlaskConical className="h-4 w-4" />
            Practical Applications
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Laboratory Assessments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on programming exercises implementing linear algebra concepts for engineering problem-solving
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {labs.map((lab) => (
              <AccordionItem
                key={lab.id}
                value={lab.id}
                className="border border-border rounded-xl overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-muted/50">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold font-serif">
                      {lab.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        Lab {lab.number}: {lab.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {lab.student}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {lab.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-muted-foreground">{lab.description}</p>
                    <a
                      href={lab.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View PDF
                      </Button>
                    </a>
                  </div>

                  {/* PDF Download Banner */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Lab Assessment Document</p>
                        <p className="text-xs text-muted-foreground">Complete handwritten solutions & diagrams</p>
                      </div>
                    </div>
                    <a href={lab.pdfUrl} download>
                      <Button size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                    </a>
                  </div>

                  {/* Problems */}
                  <div className="space-y-4 mb-6">
                    {lab.problems.map((problem, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-muted/50 border border-border/50"
                      >
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          {problem.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Given:</strong> {problem.details}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Method:</strong> {problem.method}
                        </p>
                        <div className="math-block mt-2">
                          <strong>Result:</strong> {problem.solution}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <FileCode className="h-4 w-4" />
                        Python Implementation
                      </div>
                    </div>
                    <pre className="code-block overflow-x-auto text-xs">
                      <code>{lab.code}</code>
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LabAssessments;
