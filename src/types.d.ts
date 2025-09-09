type Customer = {
	id: string;
	company_name: string;
};

type Operator = {
	id: string;
	given_name: string;
};

type VehicleMake = {
	id: number;
	name: string;
};

type VehicleModel = {
	id: number;
	make_id: number;
	name: string;
	make?: VehicleMake;
};

type Ticket = {
	id: string;
	customer_id: string;
	operator_id: string | null;
	ticket_number: number;
	created_at: string;
	connection_id: string | null;
	vehicle_model_id: number;
	vin: string;

	customer?: Customer;
	operator?: Operator;
	vehicleModel?: VehicleModel;
};
