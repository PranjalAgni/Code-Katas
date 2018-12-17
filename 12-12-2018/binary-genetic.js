var GeneticAlgorithm = function() {};

GeneticAlgorithm.prototype.generate = function(length) {
  // TODO: Implement the generate method
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  // TODO: Implement the select method
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  // TODO: Implement the mutate method
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  // TODO: Implement the crossover method
  // In this bits are crossed of chromosomes
  // For example if we have two chromosomes
  // and we cros its bit at position 3
  // so in chromosome1 after the third bit
  // we add the remaining bits after 3 of chromosome2
  // and vice versa....

  // Crossover at 3rd bit.
  let storech1 = chromosome1.substring(0, 3) + chromosome2.substring(3);
  chromosome2 = chromosome2.substring(0, 3) + chromosome1.substring(3);
  chromosome1 = storech1;
};

GeneticAlgorithm.prototype.run = function(
  fitness,
  length,
  p_c,
  p_m,
  iterations
) {
  // TODO: Implement the run method


};
