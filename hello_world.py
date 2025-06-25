from enum import Enum
from typing import List, Optional
import random

class Color(Enum):
    RED = "red"
    GREEN = "green"
    BLUE = "blue"
    YELLOW = "yellow"

class Shape:
    def __init__(self, color: Color, size: float):
        self.color = color
        self.size = size
    
    def get_area(self) -> float:
        raise NotImplementedError("Subclasses must implement get_area()")
    
    def describe(self) -> str:
        return f"A {self.color.value} shape with size {self.size}"

class Circle(Shape):
    def __init__(self, color: Color, radius: float):
        super().__init__(color, radius)
        self.radius = radius
    
    def get_area(self) -> float:
        return 3.14159 * self.radius ** 2
    
    def describe(self) -> str:
        return f"A {self.color.value} circle with radius {self.radius}"

def create_random_shape() -> Shape:
    colors = list(Color)
    color = random.choice(colors)
    size = random.uniform(1.0, 10.0)
    return Circle(color, size)

def calculate_total_area(shapes: List[Shape]) -> float:
    return sum(shape.get_area() for shape in shapes)

def find_largest_shape(shapes: List[Shape]) -> Optional[Shape]:
    if not shapes:
        return None
    return max(shapes, key=lambda x: x.get_area())

# Example usage
if __name__ == "__main__":
    shapes = [create_random_shape() for _ in range(5)]
    
    for shape in shapes:
        print(shape.describe())
        print(f"Area: {shape.get_area():.2f}")
    
    total_area = calculate_total_area(shapes)
    largest = find_largest_shape(shapes)
    
    print(f"\nTotal area: {total_area:.2f}")
    if largest:
        print(f"Largest shape: {largest.describe()}")
