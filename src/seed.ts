import { Payload } from "payload";

export const seed = async (payload: Payload): Promise<void> => {
  try {
    const usersToCreate = [
      {
        email: "admin@payloadcms.com",
        password: "test",
        firstName: "Payload",
        lastName: "CMS",
        roles: ["admin"],
      },
      {
        email: "catEditor@payloadcms.com",
        password: "test",
        firstName: "Site1",
        lastName: "User",
        roles: ["editorCat"],
      },
      {
        email: "ambEditor@payloadcms.com",
        password: "test",
        firstName: "Site1",
        lastName: "User",
        roles: ["editorAmb"],
      },
    ];

    for (const userData of usersToCreate) {
      const existingUser = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: userData.email,
          },
        },
      });

      if (existingUser.docs.length === 0) {
        // El usuario no existe, se puede crear
        await payload.create({
          collection: "users",
          data: userData,
        });
      } else {
        console.log(`El usuario con email ${userData.email} ya existe.`);
      }
    }

    //============================ITEMS=============================
    // const itemsToCreate = [
    //   {
    //     name: "item1",
    //     price: 27.5,
    //     description: {
    //       type: "doc",
    //       content: [
    //         {
    //           type: "paragraph",
    //           content: [
    //             {
    //               type: "text",
    //               text: "Descripción del producto 1 asdasdasd",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     quality: 5,
    //   },
    //   {
    //     name: "item2",
    //     price: 14.5,
    //     description: {
    //       type: "doc",
    //       content: [
    //         {
    //           type: "paragraph",
    //           content: [
    //             {
    //               type: "text",
    //               text: "Descripción del producto 2 asdasdasd",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     quality: 4,
    //   },
    //   {
    //     name: "item3",
    //     price: 102.3,
    //     description: {
    //       type: "doc",
    //       content: [
    //         {
    //           type: "paragraph",
    //           content: [
    //             {
    //               type: "text",
    //               text: "Descripción del producto 3 asdasdasd",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     quality: 9,
    //   },
    // ];

    // for (const itemData of itemsToCreate) {
    //   await payload.create({
    //     collection: "items",
    //     data: itemData,
    //   });
    // }

    //======================CONSUMPTIONS=============================
    const consumptionsToCreate = [
      {
        consumptionDay: new Date("2024-10-15"),
        quantity: 102.3,
        charge: 50.6,
      },
      {
        consumptionDay: new Date("2024-10-27"),
        quantity: 89.4,
        charge: 47.3,
      },
      {
        consumptionDay: new Date("2024-10-05"),
        quantity: 50.83,
        charge: 22.4,
      },
    ];

    for (const consumptionData of consumptionsToCreate) {
      await payload.create({
        collection: "consumptions",
        data: consumptionData,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
