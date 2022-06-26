import json

categories = ['accessories', 'components', 'peripherals']
all_products = []
id_counter = 0

# Read every item in each category database, and save in a local list
for category in categories:
	with open( f'./{category}.json', 'r', encoding="utf-8" ) as file:
		products = file.read()
		products = json.loads(products)

		for product in products:
			try:
				temporal_product = {
					"id": id_counter,
					"category": category,
					"name": product['name'],
					"itemModelNumber": product['itemModelNumber'],
					"manufacturer": product['manufacturer'],
					"fullName": product["fullName"],
					"descriptionEN": product['descriptionEN'],
					"descriptionES": product['descriptionES'],
					"sizeEN": product['size'][0],
					"sizeES": product['size'][1],
					"weightEN": product['weight'][0],
					"weightES": product['weight'][1],
					"price": product["price"],
					"img": product["img"]
				}

				all_products.append(temporal_product)

				id_counter += 1
			except:
				print( f"Error in:\n· Category: {category}\n· Product: {product['name']}" )

# Synthetize every saved item into one file
with open( './database.json', 'w') as file:
	data = json.dumps( all_products, sort_keys=True, indent=3 )

	file.write(data)

print( "All products have been synthetized in a single file (database.json)." )
