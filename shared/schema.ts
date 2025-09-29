import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  role: text("role").notNull().default('user'),
  status: text("status").notNull().default('active'),
  lastLogin: timestamp("last_login"),
});

// Tools table
export const tools = pgTable("tools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  version: text("version").notNull(),
  status: text("status").notNull().default('active'),
  downloadUrl: text("download_url"),
});

// VPS table
export const vps = pgTable("vps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  ipAddress: text("ip_address").notNull(),
  location: text("location").notNull(),
  provider: text("provider").notNull(),
  status: text("status").notNull().default('offline'),
  cpu: integer("cpu").notNull(),
  ram: integer("ram").notNull(),
  storage: integer("storage").notNull(),
  bandwidth: integer("bandwidth").notNull(),
});

// Proxies table
export const proxies = pgTable("proxies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  host: text("host").notNull(),
  port: integer("port").notNull(),
  type: text("type").notNull().default('http'),
  location: text("location").notNull(),
  status: text("status").notNull().default('offline'),
  username: text("username"),
  isAnonymous: boolean("is_anonymous").default(true),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  lastLogin: true,
});

export const insertToolSchema = createInsertSchema(tools).omit({
  id: true,
});

export const insertVpsSchema = createInsertSchema(vps).omit({
  id: true,
});

export const insertProxySchema = createInsertSchema(proxies).omit({
  id: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertTool = z.infer<typeof insertToolSchema>;
export type Tool = typeof tools.$inferSelect;
export type InsertVps = z.infer<typeof insertVpsSchema>;
export type Vps = typeof vps.$inferSelect;
export type InsertProxy = z.infer<typeof insertProxySchema>;
export type Proxy = typeof proxies.$inferSelect;
