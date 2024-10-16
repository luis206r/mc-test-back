import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { seed } from "./seed";

import Users from "./collections/Users";
import Items from "./collections/Items";
import Media from "./collections/Media";
import Consumptions from "./collections/Consumptions";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Items, Media, Consumptions],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  onInit: async (payload) => {
    // Limpiar la base de datos
    // const collections = ["users", "items", "media", "consumptions"]; // Lista de tus colecciones

    // for (const collection of collections) {
    //   const docs = await payload.find({
    //     collection,
    //     depth: 0,
    //   });

    //   for (const doc of docs.docs) {
    //     console.log(`Eliminando usuario con ID: ${doc.id}`);
    //     await payload.delete({
    //       collection,
    //       id: doc.id,
    //     });
    //   }
    // };
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  },
});
