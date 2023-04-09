async function createCategory(category) {
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.insertOne(category);
    return result.ops[0];
  }
  
  async function getAllCategories() {
    const collection = client.db(dbName).collection(collectionName);
    const cursor = await collection.find({});
    const result = await cursor.toArray();
    return result;
  }
  
  async function getCategoryById(id) {
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.findOne({ _id: ObjectID(id) });
    return result;
  }
  
  async function updateCategory(id, updates) {
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.updateOne({ _id: ObjectID(id) }, { $set: updates });
    return result.modifiedCount;
  }
  
  async function deleteCategory(id) {
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.deleteOne({ _id: ObjectID(id) });
    return result.deletedCount;
  }
  
  test('create new category', async () => {
    const category = { name: 'Phụ Kiện', description: 'đây là phụ kiện' };
    const result = await createCategory(category);
    expect(result).toBeDefined();
    expect(result.name).toEqual(category.name);
    expect(result.description).toEqual(category.description);
  });
  
  test('get all categories', async () => {
    const result = await getAllCategories();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });
  
  test('get category by id', async () => {
    const category = { name: 'Phụ kiện', description: 'đây là phụ kiện' };
    const createdCategory = await createCategory(category);
    const result = await getCategoryById(createdCategory._id);
    expect(result).toBeDefined();
    expect(result.name).toEqual(category.name);
    expect(result.description).toEqual(category.description);
  });
test('update category by id', async () => {
const category = { name: 'Phụ kiện', description: 'đây là phụ kiện' };
const createdCategory = await createCategory(category);
const updates = { description: 'This is updated description' };
const result = await updateCategory(createdCategory._id, updates);
expect(result).toEqual(1);
const updatedCategory = await getCategoryById(createdCategory._id);
expect(updatedCategory.description).toEqual(updates.description);
});

test('delete category by id', async () => {
const category = { name: 'Phụ kiện', description: 'đây là phụ kiện' };
const createdCategory = await createCategory(category);
const result = await deleteCategory(createdCategory._id);
expect(result).toEqual(1);
const deletedCategory = await getCategoryById(createdCategory._id);
expect(deletedCategory).toBeNull();
});