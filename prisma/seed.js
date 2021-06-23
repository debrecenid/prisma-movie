const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const person1 = await prisma.person.create({
    data: {
      name: "Person #1",
      born: new Date(),
      died: new Date()
    }
  });
  const person2 = await prisma.person.create({
    data: {
      name: "Person #1",
      born: new Date(),
      died: new Date()
    }
  });
  const person3 = await prisma.person.create({
    data: {
      name: "Person #1",
      born: new Date(),
      died: new Date()
    }
  });
  const category1 = await prisma.category.create({
    data: {
      name: "Category #1"
    }
  });
  const category2 = await prisma.category.create({
    data: {
      name: "Category #2"
    }
  });
  const category3 = await prisma.category.create({
    data: {
      name: "Category #3"
    }
  });
  await prisma.movie.create({
    data: {
      title: "Movie #1",
      actors: {
        connect: [
          {
            id: person1.id
          }
        ]
      },
      categories: {
        connect: {
          id: category1.id
        }
      }
    }
  });
  await prisma.movie.create({
    data: {
      title: "Movie #2",
      actors: {
        connect: [
          {
            id: person2.id
          },
          {
            id: person3.id
          }
        ]
      },
      categories: {
        connect: {
          id: category2.id
        }
      }
    }
  });
  await prisma.movie.create({
    data: {
      title: "Movie #3",
      actors: {
        connect: [
          {
            id: person3.id
          }
        ]
      },
      categories: {
        connect: {
          id: category3.id
        }
      }
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
