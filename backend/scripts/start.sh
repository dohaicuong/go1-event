#!/bin/sh

prisma migrate up --experimental
node /api/index.js