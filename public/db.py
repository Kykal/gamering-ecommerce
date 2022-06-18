import json

categories = ['accessories', 'components', 'peripherals']
all_products = []
id_counter = 0

# Read every item in each category database, and save in a local list
for category in categories:
	with open( f'./{category}.json', 'r' ) as file:
		products = file.read()
		products = json.loads(products)

		for product in products:
			temporal_product = {
				"id": id_counter,
				"name": product['name'],
				"manufacturer": product['manufacturer'],
				"fullName": product["fullName"],
				"price": product["price"],
				"img": product["img"]
			}

			all_products.append(temporal_product)

			id_counter += 1

# Synthetize every saved item into one file
with open( './database.json', 'w') as file:
	data = json.dumps( all_products, sort_keys=True, indent=3 )

	file.write(data)

print( "All products have been synthetized in a single file (database.json)." )
