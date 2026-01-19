export const food = [
  {
    "id": 1,
    "name": "Spaghetti Carbonara",
    "description": "Classic Italian pasta with creamy sauce, pancetta, and parmesan.",
    "price": 12.99,
    "image": "/images/spaghetti.jpg"
  },
  {
    "id": 2,
    "name": "Grilled Chicken Salad",
    "description": "Fresh greens with perfectly grilled chicken and balsamic dressing.",
    "price": 10.5,
    "image": "/images/chicken-salad.jpg"
  }
]

export async function GET(request) {
    return Response.json({
        status:200,
        message:"Food - API created"
    })
}